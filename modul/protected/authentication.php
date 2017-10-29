<?php 
	Class Authentication {
		public function __construct(){
			if (session_status() == PHP_SESSION_NONE) {session_start();} // session start
			require_once('protected/config.php');
			$this->db = openGate();
		}

		public function login($post){
			/* initial condition */
			$username  		= $post['username'];
			$password		= $post['password'];
			$feedStatus  	= "failed";
			$feedType  		= "danger";
			$feedMessage	= "Akses ditolak!";
			$feedData		= array();			
			$profile		= array();
			$access			= array();
			$accessType		= "-";
			$data			= array();

			//validation 
			if($username != "" && $password !=""){			
				$profile = $this->fetchSingleRequest('tabah_910_anggota', "*", array("username = '".$username."' AND", "password = md5('".$password."') AND", "statusActive = '1'"), "");
				
				if ($profile['feedStatus'] == "success" && $profile['feedData'] != false && count($profile['feedData']) > 0) {
					$profile 	= $profile['feedData'];
					$access  	= $this->fetchAllRecord('tabah_911_anggotaaccess', "module, lihat, tambah, ubah, hapus, statusAktif", array("username = '".$username."'"), "");
					$feedStatus = "success";
					$accessType	= "admin";
				}else{
					$dataPost = array("username" => $username, "password" => $password);
					$dataPost = json_encode($dataPost);
					$profile  = $this->requestLoginDplega('flogin','dplega', $dataPost);
					if($profile['feedStatus'] == "success" && count($profile['feedData']) > 0){	
						$profile = $profile['feedData'];
						$access  = array("module"=>"lembaga", "tambah" => "1", "ubah" => "1", "hapus" => "0", "statusAktif" => "1");
						$profile['urlGambar'] = getAssetUrl().'logo/'.$profile['urlGambar'];
						$feedStatus = "success";
						$accessType = "lembaga";
					}else{
						$feedMessage = $profile['feedMessage'];
					}
				}

				// $feedMessage = $profile['feedData'];
				// /* result fetch */
				if($feedStatus == "success"){	
					$_SESSION["login"] 			= "yes";
					$_SESSION["noRegistrasi"] 	= $profile['noRegistrasi'];
					$_SESSION["username"] 		= $username;
					$_SESSION["nama"] 			= $profile['nama'];
					$_SESSION["userLevel"] 		= $profile['userLevel'];
					$_SESSION["urlGambar"] 		= $profile['urlGambar'];
					$_SESSION["lingkupArea"] 	= $profile['lingkupArea'];
					$_SESSION["idBatasArea"] 	= $profile['idBatasArea'];
					$_SESSION["statusActive"] 	= $profile['statusActive'];
					$_SESSION["accessType"] 	= $accessType;
					$_SESSION["accessList"] 	= $access;

					$feedData = array( 
						"login" 		=> "yes", 
						"noRegistrasi" 	=> $profile['noRegistrasi'], 
						"username" 		=> $username, 
						"nama" 			=> $profile['nama'], 
						"userLevel" 	=> $profile['userLevel'],
						"avatar" 		=> $profile['urlGambar'], 
						"lingkupArea" 	=> $profile['lingkupArea'], 
						"idBatasArea" 	=> $profile['idBatasArea'], 
						"statusActive" 	=> $profile['statusActive'], 
						"accessType" 	=> $accessType, 
						"accessList" 	=> $access
					);

					$feedType  	= "success";
					$feedMessage= "Selamat datang!";
				}
			}else{
				$feedMessage= "Terjadi kesalahan, mohon lengkapi username dan password anda!";
			}

			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData);

			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function logout(){
			$json = array( "status" => "failed");

			// remove all session variables		
			unset($_SESSION["TABAH_nama"]);
			unset($_SESSION["TABAH_username"]);
			unset($_SESSION["TABAH_userLevel"]);
			unset($_SESSION["TABAH_urlGambar"]);

			unset($_SESSION["TABAH_login"]); 
			unset($_SESSION["TABAH_noRegistrasi"]);
			unset($_SESSION["TABAH_username"]);
			unset($_SESSION["TABAH_nama"]);
			unset($_SESSION["TABAH_userLevel"]);
			unset($_SESSION["TABAH_urlGambar"]);
			unset($_SESSION["TABAH_statusActive"]);
			unset($_SESSION["TABAH_accessList"]);
			
			if(session_destroy()){ $json = array( "feedStatus" => "success"); } 		
			
			return $json;
		}

		public function requestLoginDplega($group, $target, $data){
			// URL API
			$urlApi = getApiUrl().'login/'.$group.'/'.$target;
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

			$response=json_decode($response, true);
			return $response;
		}

		public function requestDataDplega($group, $target){
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

				$feedType = $sql;
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
	}
?>