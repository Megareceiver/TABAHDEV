<?php
	if (session_status() == PHP_SESSION_NONE) {session_start();} // session start
	require_once('protected/config.php');
	function requestDataDplega($group, $target, $data){
		// URL API
		$urlApi = getApiUrl().'requestData/'.$group.'/'.$target;
		$client = curl_init();
		//$data 	= json_encode($data);

		$options = array(
		    CURLOPT_URL				=> $urlApi, // Set URL of API
		    CURLOPT_CUSTOMREQUEST 	=> "POST", // Set request method
		    CURLOPT_RETURNTRANSFER	=> true, // true, to return the transfer as a string
		    CURLOPT_POSTFIELDS 		=> $data, // Send the data in HTTP POST
		);
		
		curl_setopt_array($client, $options);

		// Execute and Get the response
		$response = curl_exec($client);
		// Get HTTP Code response
		$httpCode = curl_getinfo($client, CURLINFO_HTTP_CODE);
		// Close cURL session
		curl_close($client);

		$response=json_decode($response);
		return $response;
	}

	function requestDataGetDplega($group, $target){
		// URL API
		$urlApi = getApiUrl().'requestData/'.$group.'/'.$target;
		$client = curl_init();
		$options = array(
		    CURLOPT_URL				=> $urlApi, // Set URL of API
		    CURLOPT_CUSTOMREQUEST 	=> "GET", // Set request method
		    CURLOPT_RETURNTRANSFER	=> true, // true, to return the transfer as a string
	    );
		
		curl_setopt_array($client, $options);

		// Execute and Get the response
		$response = curl_exec($client);
		// Get HTTP Code response
		$httpCode = curl_getinfo($client, CURLINFO_HTTP_CODE);
		// Close cURL session
		curl_close($client);

		$response=json_decode($response);
		return $response;
	}
	
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
			case "f001"  : $resultList = getSummaryBentukLembaga($data); break;
			case "f111"	 : $resultList = getProposalAwal($data); break;
			case "f1111" : $dataPost   = json_encode(array("refferences" => $data['refferences']));
						   $resultList = requestDataDplega('f1', $target, $dataPost); break;
			
			default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!", "feedData" => array()); break;
		}
		
		/* result fetch */
		$json = $resultList;
		
		return $json;
	}

	function createData($data, $target){
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
			
			default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!"); break;
		}
		
		/* result fetch */
		$json = $resultList;
		
		return $json;
	}

	function changeData($data, $target){
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
		
			default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!"); break;
		}
		
		/* result fetch */
		$json = $resultList;
		
		return $json;
	}
	
	function deleteData($data, $target){
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
			
			default	  : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!"); break;
		}
		
		/* result fetch */
		$json = $resultList;
		
		return $json;
	}

	function getProposalAwal($data){
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
		/* open connection */ 
		$gate = openGate();
		if($gate){		
			// connection = true
			if(isset($data['refferences']) && $data['refferences'] != 'single'){
				$dumb = explode(',', $data['refferences']);
				if(isset($dumb[0]) && $dumb[0] != "") { $dumbQuery['provinsi' ]	= "AND l.kodeProvinsi  = '".$dumb[0]."'"; }
				if(isset($dumb[1]) && $dumb[1] != "") { $dumbQuery['wilayah'  ]	= "AND l.kodeWilayah   = '".$dumb[1]."'"; }
				if(isset($dumb[2]) && $dumb[2] != "") { $dumbQuery['kecamatan']	= "AND l.kodeKecamatan = '".$dumb[2]."'"; }
				if(isset($dumb[3]) && $dumb[3] != "") { $dumbQuery['kelurahan']	= "AND l.kodeKelurahan = '".$dumb[3]."'"; }
			}

			/* AUTHENTICATION */
			// if(
			// 	   isset($_SESSION['login']) && $_SESSION['login'] == "yes" 
			// 	&& isset($_SESSION['userLevel']) && $_SESSION['userLevel'] != "7"){
			// 	switch ($_SESSION['lingkupArea']) {
			// 		case '3': 
			// 			$dumbFieldS = "l.kodeProvinsi"; 
			// 			$dumbQueryS = ($dumbFieldS != "") ? "AND ".$dumbFieldS." = '".$_SESSION['idBatasArea']."'" : '';
			// 			$dumbQuery['provinsi' ] = $dumbQueryS;
			// 		break;
			// 		case '2': 
			// 			$dumbFieldS = "l.kodeWilayah"; 
			// 			$dumbQueryS = ($dumbFieldS != "") ? "AND ".$dumbFieldS." = '".$_SESSION['idBatasArea']."'" : '';
			// 			$dumbQuery['wilayah' ] = $dumbQueryS;
			// 		break;
			// 		case '1': 
			// 			$dumbFieldS = "l.kodeKecamatan"; 
			// 			$dumbQueryS = ($dumbFieldS != "") ? "AND ".$dumbFieldS." = '".$_SESSION['idBatasArea']."'" : '';
			// 			$dumbQuery['kecamatan' ] = $dumbQueryS;
			// 		break;
			// 		default: break;
			// 	}

				
			// }
			/* AUTHENTICATION END */

			if(isset($data['keyword']) && $data['keyword'] != ""){	
				$dumbQuery['keyword'] = "
				AND
					( 	
						tujuan		  LIKE '%".$data['keyword']."%' OR 
						latarBelakang LIKE '%".$data['keyword']."%' OR
						nominal 	  LIKE '%".$data['keyword']."%'
					)
				";
			}

			$sql = "SELECT noRegistrasi FROM tabah_000_proposalawal WHERE status = '0' ".$dumbQuery['keyword']." ORDER BY createdDate DESC";

			$result = mysqli_query($gate, $sql);
			if($result){
				$countrow = mysqli_num_rows($result);
				if($countrow > 0) {
					$dataPost = "";
					$countrow = 0;
					while($row = mysqli_fetch_assoc($result)) {
						if($countrow == 0) 
							 $dataPost = $dataPost."'".$row['noRegistrasi']."'";
						else $dataPost = $dataPost.",'".$row['noRegistrasi']."'";
						$countrow++;
					}

					$dataPost   = json_encode(array("noRegistrasi" => $dataPost));
					$dataResult = requestDataDplega('f1', 'ft111', $dataPost)->feedData;

					$sql = 	
					"
						SELECT  
							idData,
							noRegistrasi,
							tujuan,
							latarBelakang,
							nominal,
							createdDate as sort
						FROM 
							tabah_000_proposalawal
						WHERE 
						status = '0'
						".$dumbQuery['keyword']."
						 ORDER BY sort DESC
					";

					$result = mysqli_query($gate, $sql);
					if($result){
						$package    = array(); 
						$fetch 	    = array(); 
					
						if(mysqli_num_rows($result) > 0) {
							// output data of each row 
							$counter = 0;
							while($row = mysqli_fetch_assoc($result)) {
								$fetch = array(
									"idData"   		=> $row['idData'],
									"noRegistrasi" 	=> $row['noRegistrasi'],
									"namaLembaga" 	=> $dataResult[$counter]->nama,
									"noTelp" 		=> $dataResult[$counter]->noTelp,
									"alamat" 		=> $dataResult[$counter]->alamat,
									"email" 		=> $dataResult[$counter]->email,
									"tujuan" 		=> $row['tujuan'],
									"latarBelakang" => $row['latarBelakang'],
									"nominal" 		=> 'Rp. '.number_format($row['nominal']),
								);

								$counter++;
								
								array_push($package, $fetch); 
								unset($fetch); $fetch = array();
							}

							

							/*session fetch*/
							// $access1  = sessionFecth('kelembagaan');
							// $access2  = sessionFecth('verifikasi');
							$options = array();

							// if($access1['lihat']  == '1' || $_SESSION['userLevel'] == '7') array_push($options, array("selector" => "view-card", "icon" => "search", "label" => "Lihat selengkapnya"));
							// // if($access1['lihat']  == '1') array_push($options, array("selector" => "download-card", "icon" => "download", "label" => "Unduh (.pdf)"));
							// if($access2['tambah'] == '1' || $access2['ubah']   == '1' || $_SESSION['userLevel'] == '7') array_push($options, array("selector" => "verification-card", "icon" => "check", "label" => "Verifikasi"));
							// if($access1['ubah']   == '1' || $_SESSION['userLevel'] == '7') array_push($options, array("selector" => "edit-card", "icon" => "pencil", "label" => "Ubah profil"));
							// if($access1['hapus']  == '1' || $_SESSION['userLevel'] == '7') array_push($options, array("selector" => "delete-card", "icon" => "trash", "label" => "Hapus lembaga"));
							
							array_push($options, array("selector" => "view-card", "icon" => "search", "label" => "Lihat selengkapnya"));
							array_push($options, array("selector" => "verification-card", "icon" => "check", "label" => "Verifikasi"));
							// array_push($options, array("selector" => "edit-card", "icon" => "pencil", "label" => "Ubah"));
							// array_push($options, array("selector" => "delete-card", "icon" => "trash", "label" => "Hapus"));
							
							$package = array(
								"data" => $package,
								"option" => $options
							);
							
							$resultList = array( "feedStatus" => "success", "feedMessage" => "Data ditemukan!", "feedData" => $package);
						}else {
							$resultList = array( "feedStatus" => "success", "feedMessage" => "Data tidak ditemukan!", "feedData" => array());
						}
					}			
				}			
			}			
				
			closeGate($gate);
		}else {
			//error state
			$error		= 1;
			$errorType  = "danger";
			$errorMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
		}
		
		if($error == 1){
			//error state
			$resultList = array( "feedStatus" => "failed", "feedType" => $errorType, "feedMessage" => $errorMsg);
		}
		
		/* result fetch */
		$json = $resultList;
		
		return $json;
	}
?>