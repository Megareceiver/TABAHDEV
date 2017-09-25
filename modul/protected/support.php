<?php
	require_once('protected/config.php');
	function getData($data, $target){
		/* initial condition */
		$resultList = array();
		$table 		= "";
		$field 		= array();
		$rows		= 0;
		$condition 	= "";
		$orderBy	= "";
		$error		= 0;
		$errorType  = "";
		$errorMsg	= "";
	
		/* refferences */
		
		switch($target){
			case "f91"	: $resultList = listlembaga($data);  break;
			default	    : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!", "feedData" => array()); break;
		}
		
		/* result fetch */
		$json = $resultList;
		
		return $json;
	}

	
	function listlembaga($data){
		/* initial condition */
		$resultList = array();
		$table 		= "";
		$field 		= array();
		$rows		= 0;
		$condition 	= "";
		$orderBy	= "";
		$error		= 0;
		$errorType  = "";
		$errorMsg	= "";
		$dumb		= "";
		$dumbQuery['keyword'] 		= ""; 
		$dumbQuery['refferences'] 	= ""; 
		$dumbQuery['provinsi'] 	= ""; 
		$dumbQuery['wilayah'] 	= ""; 
		$dumbQuery['kecamatan'] = ""; 
		$dumbQuery['kelurahan'] = ""; 
		$dumbFieldS	= "";
		$dumbQueryS	= "";

		//Validation 
		if(isset($data['refferences']) && $data['refferences'] != ""){	
			/* open connection */ 
			$gate = openGate();
			if($gate){		
				// connection = true
				$dumb = explode(',', $data['refferences']);
				if($dumb[0] == 'single') { $data['refferences'] = $dumb[1]; }
				else {
					$data['refferences'] 	=  $dumb[1];

					if(isset($dumb[2]) && $dumb[2] != "") { $dumbQuery['provinsi' ]	= "AND l.kodeProvinsi  = '".$dumb[2]."'"; }
					if(isset($dumb[3]) && $dumb[3] != "") { $dumbQuery['wilayah'  ]	= "AND l.kodeWilayah   = '".$dumb[3]."'"; }
					if(isset($dumb[4]) && $dumb[4] != "") { $dumbQuery['kecamatan']	= "AND l.kodeKecamatan = '".$dumb[4]."'"; }
					if(isset($dumb[5]) && $dumb[5] != "") { $dumbQuery['kelurahan']	= "AND l.kodeKelurahan = '".$dumb[5]."'"; }
				}

				/* AUTHENTICATION */
				if(
					   isset($_SESSION['login']) && $_SESSION['login'] == "yes" 
					&& isset($_SESSION['userLevel']) && $_SESSION['userLevel'] != "7"){
					switch ($_SESSION['lingkupArea']) {
						case '3': 
							$dumbFieldS = "l.kodeProvinsi"; 
							$dumbQueryS = ($dumbFieldS != "") ? "AND ".$dumbFieldS." = '".$_SESSION['idBatasArea']."'" : '';
							$dumbQuery['provinsi' ] = $dumbQueryS;
						break;
						case '2': 
							$dumbFieldS = "l.kodeWilayah"; 
							$dumbQueryS = ($dumbFieldS != "") ? "AND ".$dumbFieldS." = '".$_SESSION['idBatasArea']."'" : '';
							$dumbQuery['wilayah' ] = $dumbQueryS;
						break;
						case '1': 
							$dumbFieldS = "l.kodeKecamatan"; 
							$dumbQueryS = ($dumbFieldS != "") ? "AND ".$dumbFieldS." = '".$_SESSION['idBatasArea']."'" : '';
							$dumbQuery['kecamatan' ] = $dumbQueryS;
						break;
						default: break;
					}

					
				}
				/* AUTHENTICATION END */

				if(isset($data['keyword']) && $data['keyword'] != ""){	
					$dumbQuery['keyword'] = "
					AND
						( 	
							l.noRegistrasi		LIKE '%".$data['keyword']."%' OR 
							l.nama 				LIKE '%".$data['keyword']."%' 
						)
					";
				}

				if(isset($data['refferences']) && $data['refferences'] != ""){	
					$dumbQuery['refferences'] = "AND l.kodeBentukLembaga = '".$data['refferences']."' ";
				}

				$sql = 	
				"
				SELECT *, nama as sort FROM (
					SELECT * FROM (
						SELECT  
							'Ajuan' as `group`,
							l.`noRegistrasi` as id,
							l.`noRegistrasi` as noreg,
							l.`nama` as nama,
							l.`noTelp` as telp,
							l.`email` as email,
							`username` as username,
							namaProvinsi as np,
							namaWilayah as nw,
							namaKecamatan as nc,
							namaKelurahan as nk,
							namaBentukLembaga as nb,
							CONCAT_WS(' ', l.`alamat`, 'RT.',l.`noRt`, '/', 'RW.', l.`noRw`, `namaKelurahan`, `namaKecamatan`, `namaWilayah`, `namaProvinsi`) as alamat,
							COALESCE(`urlGambarLogo`, '') as picture
						FROM 
							dplega_000_lembaga_temp l 
						LEFT JOIN
							dplega_100_provinsi p ON l.kodeProvinsi = p.idData
						LEFT JOIN
							dplega_101_wilayah w ON l.kodeWilayah = w.idData
						LEFT JOIN
							dplega_102_kecamatan kc ON l.kodeKecamatan = kc.idData
						LEFT JOIN
							dplega_103_kelurahan kl ON l.kodeKelurahan = kl.idData
						JOIN
							dplega_200_bentuklembaga bl ON l.kodeBentukLembaga = bl.kodeBentukLembaga
						JOIN
							dplega_910_user u ON l.noRegistrasi = u.noRegistrasi
						WHERE 
						l.statusAktif = '1'
						".$dumbQuery['refferences']."
						".$dumbQuery['keyword']."
						".$dumbQuery['provinsi' ]."
						".$dumbQuery['wilayah'  ]."
						".$dumbQuery['kecamatan']." 
						".$dumbQuery['kelurahan']." 
						ORDER BY nama 
					) as table_1
					UNION
					SELECT * FROM (
						SELECT  
							'Perubahan' as `group`,
							l.`noRegistrasi` as id,
							l.`noRegistrasi` as noreg,
							l.`nama` as nama,
							l.`noTelp` as telp,
							l.`email` as email,
							`username` as username,
							namaProvinsi as np,
							namaWilayah as nw,
							namaKecamatan as nc,
							namaKelurahan as nk,
							namaBentukLembaga as nb,
							CONCAT_WS(' ', l.`alamat`, 'RT.',l.`noRt`, '/', 'RW.', l.`noRw`, `namaKelurahan`, `namaKecamatan`, `namaWilayah`, `namaProvinsi`) as alamat,
							COALESCE(`urlGambarLogo`, 'avatar-default.jpg') as picture
						FROM 
							dplega_000_lembaga_temp l 
						LEFT JOIN
							dplega_100_provinsi p ON l.kodeProvinsi = p.idData
						LEFT JOIN
							dplega_101_wilayah w ON l.kodeWilayah = w.idData
						LEFT JOIN
							dplega_102_kecamatan kc ON l.kodeKecamatan = kc.idData
						LEFT JOIN
							dplega_103_kelurahan kl ON l.kodeKelurahan = kl.idData
						JOIN
							dplega_200_bentuklembaga bl ON l.kodeBentukLembaga = bl.kodeBentukLembaga
						JOIN
							dplega_910_user u ON l.noRegistrasi = u.noRegistrasi
						WHERE 
						l.statusAktif = '2'
						".$dumbQuery['refferences']."
						".$dumbQuery['keyword']."
						".$dumbQuery['provinsi' ]."
						".$dumbQuery['wilayah'  ]."
						".$dumbQuery['kecamatan']." 
						".$dumbQuery['kelurahan']." 
						ORDER BY nama 
					) as table_2
					UNION
					SELECT * FROM (
						SELECT  
							'Valid' as `group`,
							l.`noRegistrasi` as id,
							l.`noRegistrasi` as noreg,
							l.`nama` as nama,
							l.`noTelp` as telp,
							l.`email` as email,
							`username` as username,
							namaProvinsi as np,
							namaWilayah as nw,
							namaKecamatan as nc,
							namaKelurahan as nk,
							namaBentukLembaga as nb,
							CONCAT_WS(' ', l.`alamat`, 'RT.',l.`noRt`, '/', 'RW.', l.`noRw`, `namaKelurahan`, `namaKecamatan`, `namaWilayah`, `namaProvinsi`) as alamat,
							COALESCE(`urlGambarLogo`, 'avatar-default.jpg') as picture
						FROM 
							dplega_000_lembaga l 
						LEFT JOIN
							dplega_100_provinsi p ON l.kodeProvinsi = p.idData
						LEFT JOIN
							dplega_101_wilayah w ON l.kodeWilayah = w.idData
						LEFT JOIN
							dplega_102_kecamatan kc ON l.kodeKecamatan = kc.idData
						LEFT JOIN
							dplega_103_kelurahan kl ON l.kodeKelurahan = kl.idData
						JOIN
							dplega_200_bentuklembaga bl ON l.kodeBentukLembaga = bl.kodeBentukLembaga
						JOIN
							dplega_910_user u ON l.noRegistrasi = u.noRegistrasi
						WHERE 
						l.statusAktif = '1'
						".$dumbQuery['refferences']."
						".$dumbQuery['keyword']."
						".$dumbQuery['provinsi' ]."
						".$dumbQuery['wilayah'  ]."
						".$dumbQuery['kecamatan']." 
						".$dumbQuery['kelurahan']." 
						 ORDER BY nama 
					) as table_3
				) as table_4 ORDER BY sort
				";

				$result = mysqli_query($gate, $sql);
				if($result){
					$package    = array();  
					$packageDumb= array();  
					$fetch 	    = array(); 
					$dataDumb['Ajuan']		= array(); 
					$dataDumb['Perubahan']	= array(); 
					$dataDumb['Valid']		= array(); 
				
					if(mysqli_num_rows($result) > 0) {
						// output data of each row 
						while($row = mysqli_fetch_assoc($result)) {

							$fetch = array(
								"id"   		=> $row['id'],
								"noreg" 	=> $row['noreg'],
								"nama" 		=> $row['nama'],
								"telp" 		=> $row['telp'],
								"email"		=> $row['email'],
								"alamat"	=> $row['alamat'],
								"np"		=> $row['np'],
								"nw"		=> $row['nw'],
								"nc"		=> $row['nc'],
								"nk"		=> $row['nk'],
								"nb"		=> $row['nb'],
								"picture"	=> $row['picture']
							);
							
							array_push($packageDumb, $fetch); 
							unset($fetch); $fetch = array();
						}

						// array_push($packageDumb, array("group" => "Ajuan", "collapse" => "n", "list" => $dataDumb['Ajuan']));
						// array_push($packageDumb, array("group" => "Perubahan", "collapse" => "n", "list" => $dataDumb['Perubahan']));
						// array_push($packageDumb, array("group" => "Valid", "collapse" => "n", "list" => $dataDumb['Valid']));
						
						$package = array(
							"lembaga" => $packageDumb,
							"option" => array()
						);
						
						$resultList = array( "feedStatus" => "success", "feedMessage" => "Data ditemukan!", "feedData" => $package);
					}else {
						$resultList = array( "feedStatus" => "success", "feedMessage" => "Data tidak ditemukan!", "feedData" => array());
					}
				}			
					
				closeGate($gate);
			}else {
				//error state
				$error		= 1;
				$errorType  = "danger";
				$errorMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
			}
		}else {
			//error state
			$error		= 1;
			$errorType  = "danger";
			$errorMsg	= "Terjadi kesalahan, tidak dapat menentukan refferences key!";
		} // return empty of array
		
		if($error == 1){
			//error state
			$resultList = array( "feedStatus" => "failed", "feedType" => $errorType, "feedMessage" => $errorMsg);
		}
	
		/* result fetch */
		$json = $resultList;
		
		return $json;
	}

?>