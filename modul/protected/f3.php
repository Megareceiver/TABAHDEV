<?php
	Class F3 {
		public function __construct(){
			if (session_status() == PHP_SESSION_NONE) {session_start();} // session start
			require_once('protected/config.php');
			$this->db = openGate();
		}

		public function requestData($post, $target){
			switch($target){
				
				case "infoUser" : $resultList = $this->fetchSingleRequest(
								'tabah_910_anggota', 
								"`idData`, 
								 `noRegistrasi`, 
								 `nama`, 
								 `jabatan`, 
								 `alamat`,
								 `noTelp`, 
								 `email`, 
								 `username`, 
								 `userLevel`, 
								 `urlGambar`", 'username ="'.$_SESSION['username'].'"'); 

								$resultList['feedData']['access'] = array(
									array("label" 	=> "Akses ke tabah 2.0", "status" 	=> "1")
								);
				break;

				case "userList" : $resultList = $this->fetchAllRecord('tabah_910_anggota', "*", 'username <>"'.$_SESSION['username'].'" AND userLevel <>"'.$_SESSION['userLevel'].'"', "ORDER BY userLevel DESC, nama ASC"); 

								// $resultList['feedData']['access'] = array(
								// 	array("label" 	=> "Akses ke tabah 2.0", "status" 	=> "1")
								// );
				break;



				default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Something went wrong, failed to collect data!", "feedData" => array()); break;
			}

			/* result fetch */
			$json = $resultList;
		
	        return $json;
		}

		public function fetchAllRecord($table, $fields, $conditions = "", $orderBy = ""){
			/* initial condition */
			$resultList = array();
			$feedStatus	= "failed";
			$feedType   = "danger";
			$feedMessage= "Something went wrong, failed to collect data!";
			$feedData	= array();

			$temp		= "";

			/* open connection */ 
			$gate = $this->db;
			if($gate){		

				if(is_array($fields)) {
					foreach ($fields as $value) {
						if($temp  == "") $temp = $value;
						else $temp = $temp.",".$value;
					}

					$fields = $temp;
					$temp   = "";
				}

				if(is_array($conditions)) {
					foreach ($conditions as $value) {
						$temp = $temp." ".$value;
					}

					$conditions = $temp;
					$temp   = "";
				}

				$conditions = ($conditions != "") ? "WHERE ".$conditions : "";


				$sql = "SELECT ".$fields." FROM ".$table." ".$conditions." ".$orderBy." ";
							
				$result = $this->db->query($sql);
				if($result){
					$feedStatus	= "success";
					$feedType   = "success";
					$feedMessage= "The process has been successful";
					$feedData = $result->fetchAll(PDO::FETCH_ASSOC);
				}	

				// $feedType = $sql;
			}
			
			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData);
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function fetchAllRequest($table, $fields, $conditions = "", $orderBy = "", $paging = "1"){
			/* initial condition */
			$resultList = array();
			$feedStatus	= "failed";
			$feedType   = "danger";
			$feedMessage= "Something went wrong, failed to collect data!";
			$feedData	= array();

			$temp		= "";

			/* open connection */ 
			$gate = $this->db;
			if($gate){		

				if(is_array($fields)) {
					foreach ($fields as $value) {
						if($temp  == "") $temp = $value;
						else $temp = $temp.",".$value;
					}

					$fields = $temp;
					$temp   = "";
				}

				if(is_array($conditions)) {
					foreach ($conditions as $value) {
						$temp = $temp." ".$value;
					}

					$conditions = $temp;
					$temp   = "";
				}

				$conditions = ($conditions != "") ? "WHERE ".$conditions : "";


				$temp = intval($paging);
				$temp = ($temp - 1) * 20;

				$paging = "LIMIT ".$temp.",20";

				$sql = "SELECT ".$fields." FROM ".$table." ".$conditions." ".$orderBy." ".$paging;
							
				$result = $this->db->query($sql);
				if($result){
					$feedStatus	= "success";
					$feedType   = "success";
					$feedMessage= "The process has been successful";
					$feedData = $result->fetchAll(PDO::FETCH_ASSOC);
				}	

				// $feedType = $sql;
			}
			
			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData);
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function fetchSingleRequest($table, $fields, $conditions = ""){
			/* initial condition */
			$resultList = array();
			$feedStatus	= "failed";
			$feedType   = "danger";
			$feedMessage= "Something went wrong, failed to collect data!";
			$feedData	= array();

			$temp		= "";

			/* open connection */ 
			$gate = $this->db;
			if($gate){		

				if(is_array($fields)) {
					foreach ($fields as $value) {
						if($temp  == "") $temp = $value;
						else $temp = $temp.",".$value;
					}

					$fields = $temp;
					$temp   = "";
				}

				if(is_array($conditions)) {
					foreach ($conditions as $value) {
						$temp = $temp." ".$value;
					}

					$conditions = $temp;
					$temp   = "";
				}

				$conditions = ($conditions != "") ? "WHERE ".$conditions : "";

				$sql = "SELECT ".$fields." FROM ".$table." ".$conditions;
							
				$result = $this->db->query($sql);
				if($result){
					$feedStatus	= "success";
					$feedType   = "success";
					$feedMessage= "The process has been successful";
					$feedData = $result->fetch(PDO::FETCH_ASSOC);
				}	

				// $feedType = $sql;
			}
			
			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData);
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function getData($data, $target){
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
				case "f31" : $resultList = getUserList($data); break;
				case "f311": $resultList = getFetchUser($data); break;
				case "f3111": $resultList = getFetchUserSingle(); break;
				case "f312": $resultList = getProfileUser($data); break;
				
				default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!", "feedData" => array()); break;
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function getUserList($data){
			/* initial condition */
			$resultList  = array();
			$table 		 = "";
			$field 		 = array();
			$readData	 = array();
			$readData2	 = array();
			$unReadData	 = array();
			$unReadData2 = array();
			$collectData = array();
			$rows		 = 0;
			$condition 	 = "";
			$orderBy	 = "";
			$error		 = 0;
			$errorType   = "";
			$errorMsg	 = "";
			$dumbFieldS	 = "";
			$dumbQueryS	 = "";
		
			/* open connection  */
			$gate = openGate();
			if($gate){		
				// connection = true
				/* AUTHENTICATION */
				if(
					   isset($_SESSION['TABAH_login']) && $_SESSION['TABAH_login'] == "yes" 
					&& isset($_SESSION['TABAH_userLevel']) && $_SESSION['TABAH_userLevel'] != "7"){
					switch ($_SESSION['TABAH_lingkupArea']) {
						case '3': $dumbFieldS = "kodeProvinsi"; break;
						case '2': $dumbFieldS = "kodeWilayah"; break;
						case '1': $dumbFieldS = "kodeKecamatan"; break;
						default: break;
					}

					$dumbQueryS = ($dumbFieldS != "") ? "AND ".$dumbFieldS." = '".$_SESSION['TABAH_idBatasArea']."'" : '';
				}
				/* AUTHENTICATION END */

				$sql = "SELECT * FROM dplega_910_user WHERE username != 'admin' AND userLevel != '".$_SESSION['TABAH_userLevel']."' ".$dumbQueryS." ORDER BY userLevel DESC, nama ASC";
						
				$result = mysqli_query($gate, $sql);
				if($result){
					
					if(mysqli_num_rows($result) > 0) {
						while($row = mysqli_fetch_assoc($result)) {
							$sqls = 	
								"SELECT u.*, a.appsName FROM dplega_911_useraccess u
									JOIN 
										dplega_912_apps a 
									ON u.idApps = a.idData
									WHERE username = '".$row['username']."'";
										
							$results = mysqli_query($gate, $sqls);
							if($results){
								if(mysqli_num_rows($results) > 0) {
									$temp = "";
									while($rows = mysqli_fetch_assoc($results)) {
										if($temp != $row['idData']){
											$temp = $row['idData'];
											$unReadData2 = array(
												"id"   		=> $rows['idData'],
												"appId"   	=> $rows['idData'],
												"label" 	=> $rows['appsName'],
												"type" 		=> "parent",
												"status" 	=> $rows['statusAktif']
											);

											array_push($unReadData, $unReadData2);
											unset($unReadData2);
											$unReadData2 = array();
										}
									}
								}
							}

							array_push($collectData, array(
								"id"   			=> $row['idData'],
								"nama" 			=> $row['nama'],
								"noreg" 		=> $row['noRegistrasi'],
								"username" 		=> $row['username'],
								"userLevel" 	=> $row['userLevel'],
								"rule" 			=> "Pengguna level ".$row['userLevel'],
								"picture" 		=> $row['urlGambar'],
								"telp" 			=> $row['noTelp'],
								"email" 		=> $row['email'],
								"statusActive" 	=> $row['statusActive'],
								"access"		=> $unReadData
							)) ;
							
							unset($unReadData);
							$unReadData = array();
						}
						
						$resultList = array( "feedStatus" => "succes", "feedMessage" => "Data ditemukan!", "feedData" => $collectData);
					}else {
						$resultList = array( "feedStatus" => "succes", "feedMessage" => "Data tidak ditemukan!", "feedData" => []);
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

		public function getFetchUser($data){
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
			$dumbTable  = "";
			$username 	= $data['refferences'];

			/* open connection */ 
			$gate = openGate();
			if($gate){		
				// connection = true
				//checking section
				$sql 	= " SELECT username FROM dplega_910_user WHERE username = '".$username."'";
				$result = mysqli_query($gate, $sql);
				if(mysqli_num_rows($result) <= 0) {
					$error = 1;
				}

				$record    		= array(); 
				$fetch 	   		= array();  
				$user 			= array();  
				$access 		= array(); 

				if($error != 1){
					//user
					$sql = 	"
						SELECT 
							l.`idData`, 
							l.`noRegistrasi`, 
							l.`nama`, 
							l.`jabatan`, 
							l.`alamat`, 
							l.`noRt`, 
							l.`noRw`, 
							l.`kodeKelurahan`, 
							`namaKelurahan`, 
							l.`kodeKecamatan`, 
							`namaKecamatan`, 
							l.`kodeWilayah`, 
							`namaWilayah`, 
							l.`kodeProvinsi`, 
							`namaProvinsi`,  
							l.`noTelp`, 
							l.`email`, 
							l.`lingkupArea`, 
							l.`idBatasArea`, 
							l.`username`, 
							l.`userLevel`, 
							l.`urlGambar`
						FROM
							dplega_910_user l
						LEFT JOIN
							dplega_100_provinsi p ON l.kodeProvinsi = p.idData
						LEFT JOIN
							dplega_101_wilayah w ON l.kodeWilayah = w.idData
						LEFT JOIN
							dplega_102_kecamatan kc ON l.kodeKecamatan = kc.idData
						LEFT JOIN
							dplega_103_kelurahan kl ON l.kodeKelurahan = kl.idData
						WHERE
							l.username = '".$username."'
					";
					$result = mysqli_query($gate, $sql);
					if($result){
						if(mysqli_num_rows($result) > 0) {
							// output data of each row 
							while($row = mysqli_fetch_assoc($result)) {

								$batasArea = "";
								$dumbTable = "";
								$dumbField = "";
								if($row['idBatasArea'] != "0"){
									if($row['lingkupArea'] == '3') { $dumbTable = "dplega_100_provinsi"; $dumbField = "namaProvinsi"; }
									if($row['lingkupArea'] == '2') { $dumbTable = "dplega_101_wilayah";  $dumbField = "namaWilayah";  }
									if($row['lingkupArea'] == '1') { $dumbTable = "dplega_102_kecamatan";$dumbField = "namaKecamatan";}

									$batasArea = mysqli_fetch_assoc(mysqli_query($gate, "SELECT ".$dumbField." FROM ".$dumbTable." WHERE idData = '".$row['idBatasArea']."'"));
									$batasArea = $batasArea[$dumbField];
								}

								$user = array(
											"idData"   			=> $row['idData'],
											"noRegistrasi"   	=> $row['noRegistrasi'],
											"nama" 				=> $row['nama'],
											"jabatan" 			=> $row['jabatan'],
											"alamat" 			=> $row['alamat'],
											"noRt" 				=> $row['noRt'],
											"noRw" 				=> $row['noRw'],
											"kodeKelurahan"		=> $row['kodeKelurahan'],
											"namaKelurahan"		=> $row['namaKelurahan'],
											"kodeKecamatan"		=> $row['kodeKecamatan'],
											"namaKecamatan"		=> $row['namaKecamatan'],
											"kodeWilayah"		=> $row['kodeWilayah'],
											"namaWilayah"		=> $row['namaWilayah'],
											"kodeProvinsi"		=> $row['kodeProvinsi'],
											"namaProvinsi"		=> $row['namaProvinsi'],
											"noTelp"			=> $row['noTelp'],
											"email"				=> $row['email'],
											"username"			=> $row['username'],
											"userLevel"			=> $row['userLevel'],
											"lingkupArea"		=> $row['lingkupArea'],
											"idBatasArea"		=> $row['idBatasArea'],
											"batasArea"			=> $batasArea,
											"urlGambar"			=> $row['urlGambar']
								);
							}
						}
					}else{
						//error state
						$error		= 1;
						$errorType  = "danger";
						$errorMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
					}	

					$sql = 	"
						SELECT 
							`idData`, 
							`username`, 
							`idApps`, 
							`module`, 
							`lihat`, 
							`tambah`, 
							`ubah`, 
							`hapus`
						FROM
							dplega_911_useraccess
						WHERE
							username = '".$username."'
					";

					$result = mysqli_query($gate, $sql);
					if($result){
						if(mysqli_num_rows($result) > 0) {
							while($row = mysqli_fetch_assoc($result)) {
								// output data of each row 
								$fetch = array (
									"idData" 	=> $row['idData'],
									"username" 	=> $row['username'],
									"idApps" 	=> $row['idApps'],
									"module" 	=> $row['module'],
									"lihat" 	=> $row['lihat'],
									"tambah" 	=> $row['tambah'],
									"ubah" 		=> $row['ubah'],
									"hapus" 	=> $row['hapus']
								);

								array_push($access, $fetch);
								unset($fetch);
								$fetch = array();
							}
						}
					}else{
						//error state
						$error		= 1;
						$errorType  = "danger";
						$errorMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
					}

				//end		
				}else{
					//error state
					$error		= 1;
					$errorType  = "danger";
					$errorMsg	= "Terjadi kesalahan, tidak dapat mengenali data!";
				}

				closeGate($gate);

				$record = array(
					"user" 		=> $user,
					"access"	=> $access
				);

				$resultList = array( "feedStatus" => "success", "feedMessage" => "Data ditemukan!", "feedData" => $record);
			}

			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $errorType, "feedMessage" => $errorMsg);
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function getFetchUserSingle(){
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
			$dumbTable  = "";
			$username 	= $_SESSION['TABAH_username'];

			/* open connection */ 
			$gate = openGate();
			if($gate){		
				// connection = true
				//checking section
				$sql 	= " SELECT username FROM dplega_910_user WHERE username = '".$username."'";
				$result = mysqli_query($gate, $sql);
				if(mysqli_num_rows($result) <= 0) {
					$error = 1;
				}

				$record    		= array(); 
				$fetch 	   		= array();  
				$user 			= array();  

				if($error != 1){
					//user
					$sql = 	"
						SELECT 
							l.`idData`, 
							l.`noRegistrasi`, 
							l.`nama`, 
							l.`jabatan`, 
							l.`alamat`, 
							l.`noRt`, 
							l.`noRw`, 
							l.`kodeKelurahan`, 
							`namaKelurahan`, 
							l.`kodeKecamatan`, 
							`namaKecamatan`, 
							l.`kodeWilayah`, 
							`namaWilayah`, 
							l.`kodeProvinsi`, 
							`namaProvinsi`,  
							l.`noTelp`, 
							l.`email`, 
							l.`urlGambar`
						FROM
							dplega_910_user l
						LEFT JOIN
							dplega_100_provinsi p ON l.kodeProvinsi = p.idData
						LEFT JOIN
							dplega_101_wilayah w ON l.kodeWilayah = w.idData
						LEFT JOIN
							dplega_102_kecamatan kc ON l.kodeKecamatan = kc.idData
						LEFT JOIN
							dplega_103_kelurahan kl ON l.kodeKelurahan = kl.idData
						WHERE
							l.username = '".$username."'
					";
					$result = mysqli_query($gate, $sql);
					if($result){
						if(mysqli_num_rows($result) > 0) {
							// output data of each row 
							while($row = mysqli_fetch_assoc($result)) {

								$user = array(
											"id" 				=> $row['idData'],
											"noRegistrasi" 		=> $row['noRegistrasi'],
											"nama" 				=> $row['nama'],
											"jabatan" 			=> $row['jabatan'],
											"alamat" 			=> $row['alamat'],
											"noRt" 				=> $row['noRt'],
											"noRw" 				=> $row['noRw'],
											"kodeKelurahan"		=> $row['kodeKelurahan'],
											"namaKelurahan"		=> $row['namaKelurahan'],
											"kodeKecamatan"		=> $row['kodeKecamatan'],
											"namaKecamatan"		=> $row['namaKecamatan'],
											"kodeWilayah"		=> $row['kodeWilayah'],
											"namaWilayah"		=> $row['namaWilayah'],
											"kodeProvinsi"		=> $row['kodeProvinsi'],
											"namaProvinsi"		=> $row['namaProvinsi'],
											"noTelp"			=> $row['noTelp'],
											"email"				=> $row['email'],
											"urlGambar"			=> $row['urlGambar']
								);
							}
						}
					}else{
						//error state
						$error		= 1;
						$errorType  = "danger";
						$errorMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
					}	

				//end		
				}else{
					//error state
					$error		= 1;
					$errorType  = "danger";
					$errorMsg	= "Terjadi kesalahan, tidak dapat mengenali data!";
				}

				closeGate($gate);

				$record =  $user;

				$resultList = array( "feedStatus" => "success", "feedMessage" => "Data ditemukan!", "feedData" => $record);
			}

			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $errorType, "feedMessage" => $errorMsg);
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function getProfileUser($data){
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
			$dumbTable  = "";
			$username 	= $_SESSION['TABAH_username'];
			$unReadData	 = array();
			$unReadData2 = array();
			$collectData = array();

			/* open connection */ 
			$gate = openGate();
			if($gate){		
				// connection = true
				//checking section
				$sql 	= " SELECT username FROM dplega_910_user WHERE username = '".$username."'";
				$result = mysqli_query($gate, $sql);
				if(mysqli_num_rows($result) <= 0) {
					$error = 1;
				}

				$record    		= array(); 
				$fetch 	   		= array();  
				$user 			= array();  
				$access 		= array(); 

				if($error != 1){
					//user
					$sql = 	"
						SELECT 
							l.`idData`, 
							l.`noRegistrasi`, 
							l.`nama`, 
							l.`jabatan`, 
							CONCAT_WS(' ', `alamat`, 'RT.',`noRt`, '/', 'RW.', `noRw`, `namaKelurahan`, `namaKecamatan`, `namaWilayah`, `namaProvinsi`) as alamat,
							l.`noTelp`, 
							l.`email`, 
							l.`username`, 
							l.`userLevel`, 
							l.`urlGambar`
						FROM
							dplega_910_user l
						LEFT JOIN
							dplega_100_provinsi p ON l.kodeProvinsi = p.kodeProvinsi
						LEFT JOIN
							dplega_101_wilayah w ON l.kodeWilayah = w.kodeWilayah
						LEFT JOIN
							dplega_102_kecamatan kc ON l.kodeKecamatan = kc.kodeKecamatan
						LEFT JOIN
							dplega_103_kelurahan kl ON l.kodeKelurahan = kl.kodeKelurahan
						WHERE
							l.username = '".$username."'
					";
					$result = mysqli_query($gate, $sql);
					if($result){
						if(mysqli_num_rows($result) > 0) {
							// output data of each row 
							while($row = mysqli_fetch_assoc($result)) {
								
								$sqls = 	
								"SELECT u.*, a.appsName FROM dplega_911_useraccess u
									JOIN 
										dplega_912_apps a 
									ON u.idApps = a.idData
									WHERE username = '".$username."'";
										
								$results = mysqli_query($gate, $sqls);
								if($results){
									if(mysqli_num_rows($results) > 0) {
										$temp = "";
										while($rows = mysqli_fetch_assoc($results)) {
											if($temp != $row['idData']){
												$temp = $row['idData'];
												$unReadData2 = array(
													"label" 	=> $rows['appsName'],
													"status" 	=> $rows['statusAktif']
												);

												array_push($unReadData, $unReadData2);
												unset($unReadData2);
												$unReadData2 = array();
											}
										}
									}
								}

								$user = array(
											"noRegistrasi"   	=> $row['noRegistrasi'],
											"nama" 				=> $row['nama'],
											"jabatan" 			=> $row['jabatan'],
											"alamat" 			=> $row['alamat'],
											"noTelp"			=> $row['noTelp'],
											"email"				=> $row['email'],
											"username"			=> $row['username'],
											"userLevel"			=> $row['userLevel'],
											"urlGambar"			=> $row['urlGambar'],
											"access"			=> $unReadData
								);
							}
						}
					}else{
						//error state
						$error		= 1;
						$errorType  = "danger";
						$errorMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
					}	

				//end		
				}else{
					//error state
					$error		= 1;
					$errorType  = "danger";
					$errorMsg	= "Terjadi kesalahan, tidak dapat mengenali data!";
				}

				closeGate($gate);

				$record = $user;

				$resultList = array( "feedStatus" => "success", "feedMessage" => "Data ditemukan!", "feedData" => $record);
			}

			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $errorType, "feedMessage" => $errorMsg);
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function addData($post, $target){
			switch($target){
				case "f31"  : 
					$fields = array("noRegistrasi", "nama", "jabatan", "alamat", "noTelp", "email", "username");
					$values = array();
					foreach ($fields as $key) {
						$value = (isset($post[$key]) && $post[$key] != "") ? $post[$key] : "";
						array_push($values, $value);
					}

					if(isset($post['password']) && isset($post['retype_password']) && $post['password'] == $post['retype_password']) {
						array_push($fields, "password");
						array_push($values, md5($post['password']));
					}

					array_push($fields, "statusActive");
					array_push($values, "1");
					array_push($fields, "userLevel");
					array_push($values, "2");

					$resultList = $this->insert('tabah_910_anggota', $fields, $values); 

					if($resultList["feedStatus"] == "success") {
						if(isset($_FILES["imageUrl"])){
							$upload = $this->uploadSingleImage($_FILES["imageUrl"], "avatar", "tabah_910_anggota", "urlGambar", $resultList["feedId"]);
							array_push($resultList, array("feedUpload" => $upload['feedMessage']));
						}
					}
				break;

				default	   		: $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Something went wrong, failed to collect data!", "feedData" => array()); break;
			}

			/* result fetch */
			$json = $resultList;
		
	        return $json;
		}

		//INSERT DATA
		public function insert($table, $fields, $values){
			/* initial condition */
			$resultList = array();
			$feedStatus	= "failed";
			$feedType   = "danger";
			$feedMessage= "Something went wrong, failed to collect data!";
			$feedData	= array();
			$feedId		= "";

			$temp		= "";

			/* open connection */ 
			$gate = $this->db;
			if($gate){		

				if(is_array($fields)) {
					foreach ($fields as $item) {
						if($temp  == "") $temp = $item;
						else $temp = $temp.",".$item;
					}

					$fields = $temp;
					$temp   = "";
				}

				if(is_array($values)) {
					foreach ($values as $item) {
						if($temp  == "") $temp = "'".$item."'";
						else $temp = $temp.",'".$item."'";
					}

					$values = $temp;
					$temp   = "";
				}

				$sql = "INSERT INTO ".$table."(".$fields.", createdBy, createdDate) VALUES (".$values.", 'SESSION_TEST',NOW())";
							
				$result = $this->db->query($sql);
				if($result){
					$feedStatus	= "success";
					$feedType   = "success";
					$feedMessage= "The process has been successful";
					$feedId 	= $this->db->lastInsertId();
				}	

				$feedType = $sql;
			}
			
			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData, "feedId" => $feedId);
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
					
		}

		//UPLOAD IMAGE
		public function uploadSingleImage($image, $dir, $table, $field, $id){
			error_reporting(E_ALL);
			/* initial condition */
			$resultList = array();
			$feedStatus	= "failed";
			$feedType   = "danger";
			$feedMessage= "Something went wrong, failed to upload data!";
			$feedData	= array();

			$temp		= "";

			/* open connection */ 
			$gate = $this->db;
			if($gate){		

				/*upload image*/
				if(isset($image)){

					$file_name = $image['name'];
				    $file_size = $image['size'];
				    $file_tmp  = $image['tmp_name'];
				    $file_type = $image['type'];

					$Validextensions = array("jpeg", "JPEG", "jpg", "JPG", "png", "PNG", "gif", "GIF");
					$temporary 		 = explode(".", $file_name);
					$fileExtension   = end($temporary);
					$newFileName 	 = $dir."_".$id.".".$fileExtension;
					$saveAs 		 = "../img/".$dir."/".$newFileName;

					if (in_array($fileExtension, $Validextensions)) {
						if(move_uploaded_file($file_tmp, $saveAs)){ 
							$sql = "UPDATE ".$table." SET ".$field."='".$newFileName."' WHERE idData ='".$id."'";
									
							$result = $this->db->query($sql);
							if($result){
								$feedStatus	= "success";
								$feedType   = "success".is_dir($saveAs);
								$feedMessage= "The process has been successful";
							}
						}							
					}
				}
				/*upload end*/

			}
			
			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData);
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
					
		}

		public function createData($data, $target){
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
				case "f31": $resultList = createUserSection($target, $data); break;
				default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!"); break;
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}
		
		public function createUserSection($target, $data){
			/* initial condition */
			$resultList = array();
			$table 		= "";
			$field 		= array();
			$rows		= 0;
			$condition 	= "";
			$orderBy	= "";
			$error		= 0;
			$resultType = "";
			$resultMsg	= "";
			$counter	= "";
			$idRecent	= "";
			$idTemp		= "";
			
			/* validation */
			if( 
				   $data['nama'] == ""
				|| $data['email'] == ""
				|| $data['username'] == ""
				|| $data['password'] == "" || $data['re-password'] == ""
				|| $data['lingkupArea'] == "" || $data['idBatasArea'] == ""
				|| $data['lingkupArea'] == "" || $data['idBatasArea'] == ""
			){ $error = 1; }

			if($error != 1){
				if($data['password'] == $data['re-password']){
					/* open connection */
					$gate = openGate();
					if($gate){
						// connection = true
						$sql = 
						"	INSERT INTO dplega_910_user
							(
								noRegistrasi,
								nama,
								jabatan,
								alamat,
								noRt,
								noRw,
								kodeKelurahan,
								kodeKecamatan,
								kodeWilayah,
								kodeProvinsi,
								noTelp,
								email,
								username,
								password,
								userLevel,
								lingkupArea,
								idBatasArea,
								statusActive,
								createdBy, createdDate
							)
							VALUES
							(
								'',
								'".$data['nama']."',
								'".$data['jabatan']."',
								'".$data['alamat']."',
								'".$data['rt']."',
								'".$data['rw']."',
								'".$data['kodeKelurahan']."',
								'".$data['kodeKecamatan']."',
								'".$data['kodeWilayah']."',
								'".$data['kodeProvinsi']."',
								'".$data['telp']."',
								'".$data['email']."',
								'".$data['username']."',
								md5('".$data['password']."'),
								'".$data['userLevel']."',
								'".$data['lingkupArea']."',
								'".$data['idBatasArea']."',
								'1',
								'".$_SESSION['TABAH_username']."',NOW()
							)
						";

						$result	  = mysqli_query($gate, $sql);
						if($result){	
							$error	    = 0;
							$resultType = "success";
							$resultMsg  = "Input berhasil disimpan. ";

							/*upload image*/
							if(isset($_FILES["imageUrl"])){
								$validextensions = array("jpeg", "jpg", "png", "gif");
								$temporary = explode(".", $_FILES["imageUrl"]["name"]);
								$file_extension = end($temporary);
								$file_name = "berkas belum diunggah...";					
								if (in_array($file_extension, $validextensions)) {						
									if ($_FILES["imageUrl"]["error"] > 0)
									{
										$upload_message = $_FILES["imageUrl"];
									}
									else
									{		
										$file_name = $data['username']."_avatar.".$file_extension;
										$sourcePath = $_FILES['imageUrl']['tmp_name']; // Storing source path of the file in a variable
										$targetPath = "img/avatar/".$file_name; // Target path where file is to be stored
										if(move_uploaded_file($sourcePath,"../".$targetPath)){ /*Moving Uploaded file*/
											$sql = "UPDATE dplega_910_user SET urlGambar = '".$file_name."' WHERE username = '".$data['username']."'";			
											$result = mysqli_query($gate, $sql);									
										}								
									}
								}
							}
							/*upload end*/


							/* access list*/
							if(isset($data['module'])){
								$sql = "";
								foreach( $data['module'] as $key => $value ) {
									$lihat 	= "0";
									$tambah = "0";
									$ubah 	= "0";
									$hapus 	= "0";

									if(isset($data[$value.'-lihat'])){
										$lihat = "1";
									}

									if(isset($data[$value.'-tambah'])){
										$tambah = "1";
									}

									if(isset($data[$value.'-ubah'])){
										$ubah = "1";
									}

									if(isset($data[$value.'-hapus'])){
										$hapus = "1";
									}

									$sql = 
									"	INSERT INTO dplega_911_useraccess
										(
											username,
											idApps,
											module,
											lihat,
											tambah,
											ubah,
											hapus,
											createdBy,createdDate
										)
										VALUES
										(
											'".$data['username']."',
											'1',
											'".$value."',
											'".$lihat."',
											'".$tambah."',
											'".$ubah."',
											'".$hapus."',
											'".$_SESSION['TABAH_username']."',NOW()
										);
									";

									$result	  = mysqli_query($gate, $sql);
								}
								
								if(!$result){
									//error state
									$error		= 1;
									$resultType = "warning";
									$resultMsg	= "Berhasil menyimpan user, gagal menyimpan acces-list";
								}
							}
						}else{
							//error state
							$eresult  = mysqli_error($gate);
							$error		= 1;
							$resultType = "danger";
							$resultMsg	= "Terjadi kesalahan fatal, input gagal disimpan!".$eresult;
						}
						
						closeGate($gate);
					}else{
						//error state
						$error		= 1;
						$resultType = "danger";
						$resultMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
					}
				}else{
					//error state
					$error		= 1;
					$resultType = "danger";
					$resultMsg	= "Password tidak cocok!";
				}
			}else{
				//error state
				$error		= 1;
				$resultType = "danger";
				$resultMsg	= "Terjadi kesalahan, mandatory tidak boleh kosong!";
			}
			
			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $resultType, "feedMessage" => $resultMsg);
			}else{
				$resultList = array( "feedStatus" => "success", "feedType" => $resultType, "feedMessage" => $resultMsg, "feedId" => "");
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function changeData($data, $target){
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
				case "f31" : $resultList = changeUserSection($target, $data); break;
				case "f311": $resultList = changeUserStatus($target, $data); break;
				case "f313": $resultList = changeUserPassword($data); break;
				case "f314": $resultList = changeUserSingle($data); break;

				default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!"); break;
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function changeUserSection($target, $data){
			/* initial condition */
			$resultList = array();
			$table 		= "";
			$field 		= array();
			$rows		= 0;
			$condition 	= "";
			$orderBy	= "";
			$error		= 0;
			$resultType = "";
			$resultMsg	= "";
			$counter	= "";
			$idRecent	= "";
			$idTemp		= "";
			$dumbTable  = "";
			$noreg		= "";
			$file_name	= "";
			$dumbQuery	= "";
			
			if( 
				   $data['nama'] == ""
				|| $data['email'] == ""
				|| $data['username'] == ""
				|| $data['lingkupArea'] == "" || $data['idBatasArea'] == ""
			){ 
				$error = 1; 
				$resultType = "danger";
				$resultMsg	= "Terjadi kesalahan, mandatory tidak boleh kosong!";}

			if($error != 1){
				/* open connection */
				$gate = openGate();
				if($gate){
				// connection = true
					//checking section
					if(isset($data['password']) && $data['password']!= "" && $data['password'] != $data['re-password']){
						$error = 1;
						$resultType = "danger";
						$resultMsg	= "Password tidak cocok!";
					}elseif(isset($data['password']) && $data['password']!= "" && $data['password'] == $data['re-password']){
						$dumbQuery = "password = md5('".$data['password']."'),";
					}

					if($error != 1){
						$username = $data['username'];
						$sql 	= " SELECT username FROM dplega_910_user WHERE username = '".$username."'";
						$result = mysqli_query($gate, $sql);
						if(mysqli_num_rows($result) <= 0) {
							$error = 1;
							$resultType = "danger";
							$resultMsg	= "Terjadi kesalahan fatal, tidak dapat mengenali data!";
						}

						if($error != 1){
							$sql = 
							"	UPDATE dplega_910_user
								SET
									nama 				= '".$data['nama']."',
									alamat 				= '".$data['alamat']."',
									noRt 				= '".$data['rt']."',
									noRw 				= '".$data['rw']."',
									kodeKelurahan 		= '".$data['kodeKelurahan']."',
									kodeKecamatan 		= '".$data['kodeKecamatan']."',
									kodeWilayah 		= '".$data['kodeWilayah']."',
									kodeProvinsi 		= '".$data['kodeProvinsi']."',
									noTelp 				= '".$data['telp']."',
									email 				= '".$data['email']."',
									idBatasArea			= '".$data['idBatasArea']."',
									lingkupArea			= '".$data['lingkupArea']."',
									userLevel			= '".$data['userLevel']."',
									".$dumbQuery."
									changedBy 			= '".$_SESSION['TABAH_username']."',
									changedDate			= NOW()
								
								WHERE
									username = '".$data['username']."'
							";
							$result	  = mysqli_query($gate, $sql);
							if($result){	
								$error	    = 0;
								$resultType = "success";
								$resultMsg  = "data berhasil diubah.";

								if(isset($data['fileState']) && $data['fileState'] == "remove"){
									$sql 	= "
										SELECT urlGambar FROM dplega_910_user
										WHERE username = '".$data['username']."'";
							
										$result = mysqli_query($gate, $sql);
										if(mysqli_num_rows($result) > 0) {
											while($row = mysqli_fetch_assoc($result)) {
												if(file_exists("../img/avatar/".$row['urlGambar'])){
													unlink("../img/avatar/".$row['urlGambar']);
												}
											}
										}

										$file_name = "berkas belum diunggah...";
										$sql = "
												UPDATE dplega_910_user".$dumbTable." SET urlGambar = '' 
												WHERE username = '".$data['username']."'";	
										$result = mysqli_query($gate, $sql);

								}else{
									if(isset($_FILES["imageUrl"])){
									/*upload image*/
										$validextensions = array("jpeg", "jpg", "png", "gif");
										$temporary = explode(".", $_FILES["imageUrl"]["name"]);
										$file_extension = end($temporary);
										$file_name = "berkas belum diunggah...";				
										if (in_array($file_extension, $validextensions)) {						
											if ($_FILES["imageUrl"]["error"] > 0)
											{
												$upload_message = $_FILES["imageUrl"];
											}
											else
											{		
												$file_name = $username."_avatar.".$file_extension;				
												$sourcePath = $_FILES['imageUrl']['tmp_name']; // Storing source path of the file in a variable
												$targetPath = "img/avatar/".$file_name; // Target path where file is to be stored
												if(move_uploaded_file($sourcePath,"../".$targetPath)){ /*Moving Uploaded file*/
													$sql = "UPDATE dplega_910_user SET urlGambar = '".$file_name."' WHERE username = '".$data['username']."'";		
													$result = mysqli_query($gate, $sql);									
												}								
											}
										}
									}
									/*upload end*/
								}

								/* access list*/
								if(isset($data['module'])){
									$sql = "";
									foreach( $data['module'] as $key => $value ) {
										$lihat 	= "0";
										$tambah = "0";
										$ubah 	= "0";
										$hapus 	= "0";

										if(isset($data[$value.'-lihat'])){
											$lihat = "1";
										}

										if(isset($data[$value.'-tambah'])){
											$tambah = "1";
										}

										if(isset($data[$value.'-ubah'])){
											$ubah = "1";
										}

										if(isset($data[$value.'-hapus'])){
											$hapus = "1";
										}


										$sql 	= "SELECT module FROM dplega_911_useraccess WHERE module = '".$value."' AND username = '".$username."'";
										$result	= mysqli_query($gate, $sql);
										if(mysqli_num_rows($result) > 0) {
											$sql = 
											"	UPDATE dplega_911_useraccess
												SET
													lihat = '".$lihat."',
													tambah = '".$tambah."',
													ubah = '".$ubah."',
													hapus = '".$hapus."',
													changedBy = '".$_SESSION['TABAH_username']."',
													changedDate = NOW()
												WHERE
													username = '".$username."'
												AND module = '".$value."'
											";
										}else{
											$sql = 
											"	INSERT INTO dplega_911_useraccess
												(
													username,
													idApps,
													module,
													lihat,
													tambah,
													ubah,
													hapus,
													createdBy,createdDate
												)
												VALUES
												(
													'".$data['username']."',
													'1',
													'".$value."',
													'".$lihat."',
													'".$tambah."',
													'".$ubah."',
													'".$hapus."',
													'".$_SESSION['TABAH_username']."',NOW()
												);
											";
										}

										$result	  = mysqli_query($gate, $sql);
									}
									
									if(!$result){
										//error state
										$error		= 1;
										$resultType = "warning";
										$resultMsg	= "Berhasil menyimpan user, gagal menyimpan acces-list";
									}
								}
							}else{
								//error state
								$error		= 1;
								$resultType = "danger";
								$resultMsg	= "Terjadi kesalahan fatal, data gagal diubah!";
							}
						}
					}
					closeGate($gate);
				}else{
					//error state
					$error		= 1;
					$resultType = "danger";
					$resultMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
				}

			}else{
				//error state
				$error		= 1;
				$errorType  = "danger";
				$errorMsg	= "Terjadi kesalahan, tidak dapat mengenali data!";
			}
			
			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $resultType, "feedMessage" => $resultMsg);
			}else{
				$resultList = array( "feedStatus" => "success", "feedType" => $resultType, "feedMessage" => $resultMsg, "feedId" => $file_name, "feedPId" => "");
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function changeUserSingle($data){
			/* initial condition */
			$resultList = array();
			$table 		= "";
			$field 		= array();
			$rows		= 0;
			$condition 	= "";
			$orderBy	= "";
			$error		= 0;
			$resultType = "";
			$resultMsg	= "";
			$counter	= "";
			$idRecent	= "";
			$idTemp		= "";
			$dumbTable  = "";
			$noreg		= "";
			$file_name	= "";
			
			if( 
				   $data['nama'] == ""
				|| $data['email'] == ""
			){ 
				$error = 1; 
				$resultType = "danger";
				$resultMsg	= "Terjadi kesalahan, mandatory tidak boleh kosong!";}

			if($error != 1){
				/* open connection */
				$gate = openGate();
				if($gate){
				// connection = true
					//checking section

					$username = $_SESSION['TABAH_username'];
					$sql 	= " SELECT username FROM dplega_910_user WHERE username = '".$username."'";
					$result = mysqli_query($gate, $sql);
					if(mysqli_num_rows($result) <= 0) {
						$error = 1;
						$resultType = "danger";
						$resultMsg	= "Terjadi kesalahan fatal, tidak dapat mengenali data!";
					}

					if($error != 1){
						$sql = 
						"	UPDATE dplega_910_user
							SET
								nama 				= '".$data['nama']."',
								jabatan 			= '".$data['jabatan']."',
								alamat 				= '".$data['alamat']."',
								noRt 				= '".$data['rt']."',
								noRw 				= '".$data['rw']."',
								kodeKelurahan 		= '".$data['kodeKelurahan']."',
								kodeKecamatan 		= '".$data['kodeKecamatan']."',
								kodeWilayah 		= '".$data['kodeWilayah']."',
								kodeProvinsi 		= '".$data['kodeProvinsi']."',
								noTelp 				= '".$data['telp']."',
								email 				= '".$data['email']."',
								changedBy 			= '".$username."',
								changedDate			= NOW()
							
							WHERE
								username = '".$username."'
						";
						$result	  = mysqli_query($gate, $sql);
						if($result){	
							$error	    = 0;
							$resultType = "success";
							$resultMsg  = "data berhasil diubah.";

							if(isset($data['fileState']) && $data['fileState'] == "remove"){
								$sql 	= "
									SELECT urlGambar FROM dplega_910_user
									WHERE username = '".$username."'";
						
									$result = mysqli_query($gate, $sql);
									if(mysqli_num_rows($result) > 0) {
										while($row = mysqli_fetch_assoc($result)) {
											if(file_exists("../img/avatar/".$row['urlGambar'])){
												unlink("../img/avatar/".$row['urlGambar']);
											}
										}
									}

									$file_name = "berkas belum diunggah...";
									$sql = "
											UPDATE dplega_910_user".$dumbTable." SET urlGambar = '' 
											WHERE username = '".$username."'";	
									$result = mysqli_query($gate, $sql);

							}else{
								if(isset($_FILES["imageUrl"])){
								/*upload image*/
									$validextensions = array("jpeg", "jpg", "png", "gif");
									$temporary = explode(".", $_FILES["imageUrl"]["name"]);
									$file_extension = end($temporary);
									$file_name = "berkas belum diunggah...";				
									if (in_array($file_extension, $validextensions)) {						
										if ($_FILES["imageUrl"]["error"] > 0)
										{
											$upload_message = $_FILES["imageUrl"];
										}
										else
										{		
											$file_name = $username."_avatar.".$file_extension;				
											$sourcePath = $_FILES['imageUrl']['tmp_name']; // Storing source path of the file in a variable
											$targetPath = "img/avatar/".$file_name; // Target path where file is to be stored
											if(move_uploaded_file($sourcePath,"../".$targetPath)){ /*Moving Uploaded file*/
												$sql = "UPDATE dplega_910_user SET urlGambar = '".$file_name."' WHERE username = '".$username."'";		
												$result = mysqli_query($gate, $sql);									
											}								
										}
									}
								}
								/*upload end*/
							}
						}else{
							//error state
							$error		= 1;
							$resultType = "danger";
							$resultMsg	= "Terjadi kesalahan fatal, data gagal diubah!";
						}
					}
					
					closeGate($gate);
				}else{
					//error state
					$error		= 1;
					$resultType = "danger";
					$resultMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
				}

			}else{
				//error state
				$error		= 1;
				$errorType  = "danger";
				$errorMsg	= "Terjadi kesalahan, tidak dapat mengenali data!";
			}
			
			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $resultType, "feedMessage" => $resultMsg);
			}else{
				$resultList = array( "feedStatus" => "success", "feedType" => $resultType, "feedMessage" => $resultMsg, "feedId" => $file_name, "feedPId" => "");
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function changeUserPassword($data){
			/* initial condition */
			$resultList = array();
			$table 		= "";
			$field 		= array();
			$rows		= 0;
			$condition 	= "";
			$orderBy	= "";
			$error		= 0;
			$resultType = "";
			$resultMsg	= "";
			$counter	= "";
			$idRecent	= "";
			$idTemp		= "";
			$dumbTable  = "";
			$noreg		= "";
			$file_name	= "";
			$dumbQuery	= "";
			
			if( 
				   $data['oldPassword'] == ""
				|| $data['newPassword'] == ""
				|| $data['rePassword'] == ""
			){ 
				$error = 1; 
				$resultType = "danger";
				$resultMsg	= "Terjadi kesalahan, mandatory tidak boleh kosong!";}

			if($error != 1){
				if( $data['newPassword'] != $data['rePassword'] ){ 
					$error = 1; 
					$resultType = "danger";
					$resultMsg	= "Password tidak cocok!"; }

				if($error != 1){
				/* open connection */
					$gate = openGate();
					if($gate){
					// connection = true
						$username = $_SESSION['TABAH_username'];
						$sql 	= " SELECT username FROM dplega_910_user WHERE username = '".$username."' AND password = md5('".$data['oldPassword']."')";
						$result = mysqli_query($gate, $sql);
						if(mysqli_num_rows($result) <= 0) {
							$error = 1;
							$resultType = "danger";
							$resultMsg	= "Terjadi kesalahan fatal, Password tidak sesuai!";
						}

						if($error != 1){
							$sql = 
							"	UPDATE dplega_910_user
								SET
									password			= md5('".$data['newPassword']."'),
									changedBy 			= '".$username."',
									changedDate			= NOW()
								
								WHERE
									username = '".$username."'
							";
							$result	  = mysqli_query($gate, $sql);
							if($result){	
								$error	    = 0;
								$resultType = "success";
								$resultMsg  = "data berhasil diubah.";
							}else{
								//error state
								$error		= 1;
								$resultType = "danger";
								$resultMsg	= "Terjadi kesalahan fatal, data gagal diubah!";
							}
						}

						closeGate($gate);
					}else{
						//error state
						$error		= 1;
						$resultType = "danger";
						$resultMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
					}
				}

			}
			
			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $resultType, "feedMessage" => $resultMsg);
			}else{
				$resultList = array( "feedStatus" => "success", "feedType" => $resultType, "feedMessage" => $resultMsg, "feedId" => $file_name, "feedPId" => "");
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function changeUserStatus($target, $data){
			/* initial condition */
			$resultList = array();
			$table 		= "";
			$field 		= array();
			$rows		= 0;
			$condition 	= "";
			$orderBy	= "";
			$error		= 0;
			$resultType = "";
			$resultMsg	= "";
			$counter	= "";
			$idRecent	= "";
			$idTemp		= "";
			$dumbTable  = "";
			$noreg		= "";
			$file_name	= "";
			$dumbQuery	= "";
			
			if(
					$data['pId'] == ""
				||	$data['refferenceId'] == ""
			){ 
				$error = 1; 
				$resultType = "danger";
				$resultMsg	= "Terjadi kesalahan, mandatory tidak boleh kosong!";}

			if($error != 1){
				/* open connection */
				$gate = openGate();
				if($gate){
				// connection = true
					//checking section
					$username = $data['pId'];
					$sql 	= " SELECT username FROM dplega_910_user WHERE username = '".$username."'";
					$result = mysqli_query($gate, $sql);
					if(mysqli_num_rows($result) <= 0) {
						$error = 1;
						$resultType = "danger";
						$resultMsg	= "Terjadi kesalahan fatal, tidak dapat mengenali data!";
					}

					if($error != 1){

						$sql = 
						"	UPDATE dplega_910_user
							SET
								statusActive		= '".$data['refferenceId']."',
								changedBy 			= '".$_SESSION['TABAH_username']."',
								changedDate			= NOW()
							
							WHERE
								username = '".$username."'
						";

						$result	  = mysqli_query($gate, $sql);
						if($result){	
							$error	    = 0;
							$resultType = "success";
							$resultMsg  = "data berhasil diubah.";

							$sql = 
							"	UPDATE dplega_911_useraccess
								SET
									statusAktif 		= '".$data['refferenceId']."',
									changedBy 			= '".$_SESSION['TABAH_username']."',
									changedDate			= NOW()
								
								WHERE
									username = '".$username."'
							";
							$result	  = mysqli_query($gate, $sql);

						}else{
							//error state
							$error		= 1;
							$resultType = "danger";
							$resultMsg	= "Terjadi kesalahan fatal, data gagal diubah!";
						}
					}
					
					closeGate($gate);
				}else{
					//error state
					$error		= 1;
					$resultType = "danger";
					$resultMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
				}

			}else{
				//error state
				$error		= 1;
				$errorType  = "danger";
				$errorMsg	= "Terjadi kesalahan, tidak dapat mengenali data!";
			}
			
			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $resultType, "feedMessage" => $resultMsg);
			}else{
				$resultList = array( "feedStatus" => "success", "feedType" => $resultType, "feedMessage" => $resultMsg, "feedId" => $file_name, "feedPId" => "");
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function deleteData($data, $target){
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
				case "f31": $resultList = deleteUser($target, $data); break;
				default	  : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!"); break;
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function deleteUser($target, $data){
			/* initial condition */
			$resultList = array();
			$table 		= "";
			$field 		= array();
			$rows		= 0;
			$condition 	= "";
			$orderBy	= "";
			$error		= 0;
			$resultType = "";
			$resultMsg	= "";
			$counter	= "";
			$dumbTable  = "";
			$noreg 	  	= "";
			$dumbRes 	= ['',''];

			/* validation */
			if(isset($data['pId']) && $data['pId'] != ""){
				
				/* open connection */ 
				$gate = openGate();
				if($gate){		
					// connection = true
					//checking section
					$username = $data['pId'];
					$sql 	= " SELECT username FROM dplega_910_user WHERE username = '".$username."'";
					$result = mysqli_query($gate, $sql);
					if(mysqli_num_rows($result) <= 0) {
						//error state
						$error		= 1;
						$errorType  = "danger";
						$errorMsg	= "Terjadi kesalahan, data tidak dikenal!";
					}

					if($error != 1){

						//delete phase
						//mysqli_query("BEGIN");

							$sql 	= "DELETE FROM dplega_911_useraccess WHERE username = '".$username."'";
							$dumbRes[0] = mysqli_query($gate, $sql);

							$sql 	= "DELETE FROM dplega_910_user WHERE username = '".$username."'";
							$dumbRes[1] = mysqli_query($gate, $sql);

						if(
							   $dumbRes[0]
							&& $dumbRes[1]
						){
							//mysqli_query("COMMIT");

							//avatar
							$dir 	= "../img/avatar/";
							$images = glob($dir.$username."_*");
							foreach ($images as $image) {
								unlink($image);
							}

							$error	    = 0;
							$resultType = "success";
							$resultMsg  = "data berhasil dihapus.";
						}else{
						//error
							//mysqli_query("ROLLBACK");
							//error state
							$error		= 1;
							$resultType = "danger";
							$resultMsg	= "Terjadi kesalahan fatal, data gagal dihapus! ";
						}
					}else{
						//error state
						$error		= 1;
						$resultType = "danger";
						$resultMsg	= "Terjadi kesalahan, tidak dapat mengenali data!";
					}
						
					closeGate($gate);
				}else{
					//error state
					$error		= 1;
					$resultType = "danger";
					$resultMsg	= "Terjadi kesalahan, tidak dapat terhubung ke server!";
				}
			}else{
				//error state
				$error		= 1;
				$resultType = "danger";
				$resultMsg	= "Terjadi kesalahan, ID tidak ditemukan!";
			}
			
			if($error == 1){
				//error state
				$resultList = array( "feedStatus" => "failed", "feedType" => $resultType, "feedMessage" => $resultMsg);
			}else{
				$resultList = array( "feedStatus" => "success", "feedType" => $resultType, "feedMessage" => $resultMsg, "feedId" => $data['pId']);
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}
	}
	
?>