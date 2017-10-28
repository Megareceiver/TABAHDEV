<?php
	Class F1 {
		public function __construct(){
			if (session_status() == PHP_SESSION_NONE) {session_start();} // session start
			require_once('protected/config.php');
			$this->db = openGate();
		}

		public function requestData($post, $target){
			switch($target){
				case "profile" 		: 
					$resultbox = $this->requestDataDplega("f1", "fetchLembaga", $post); 
					$profile = $resultbox['feedData'];
					$feedData['profile'] = $profile;
					$feedData['option'] = array(
						array("selector" => "add-card", "icon" => "pencil", "label" => "Permohonan baru"),
						array("selector" => "logout-card", "icon" => "power-off", "label" => "Keluar")
					);

					$resultList = array( "feedStatus" => "success", "feedType" => "success", "feedMessage" => "collected", "feedData" => $feedData);
				break;

				default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Something went wrong, failed to collect data!", "feedData" => array()); break;
			}

			/* result fetch */
			$json = $resultList;
		
	        return $json;
		}

		public function requestDataDplega($group, $target, $data){
			// URL API
			$urlApi = getApiUrl().'requestData/'.$group.'/'.$target;
			$client = curl_init();
			$data 	= json_encode($data);

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

		public function requestDataGetDplega($group, $target){
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

				$feedType = $sql;
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

					$feedType = $sql;
			}
			
			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData);
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		// DELETE DATA
		public function deleteById($table, $conditions, $image){
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

				if(is_array($conditions)) {
					foreach ($conditions as $value) {
						if($temp  == "") $temp = $value;
						else $temp = $temp.",".$value;
					}

					$conditions = $temp;
					$temp   = "";
				}

				$sql = "DELETE FROM ".$table." WHERE idData IN (".$conditions.")";
							
				$result = $this->db->query($sql);
				if($result){
					$feedStatus	= "success";
					$feedType   = "success";
					$feedMessage= "The process has been successful";
					$feedData   = $conditions;
				}	

				$feedType = $sql;
			}
			
			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData);
			
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

		//UPDATE DATA
		public function update($table, $values, $id){
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

				if(is_array($values)) {
					foreach ($values as $item) {
						if($temp  == "") $temp = $item;
						else $temp = $temp.",".$item;
					}

					$values = $temp;
					$temp   = "";
				}

				$sql = "UPDATE ".$table." SET ".$values.", changedBy = 'SESSION_TEST', changedDate = NOW() WHERE idData = '".$id."'";
							
				$result = $this->db->query($sql);
				if($result){
					$feedStatus	= "success";
					$feedType   = "success";
					$feedMessage= "The process has been successful";
				}	

				$feedType = $sql;
			}
			
			$resultList = array( "feedStatus" => $feedStatus, "feedType" => $feedType, "feedMessage" => $feedMessage, "feedData" => $feedData);
			
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
					$saveAs 		 = "../assets/".$dir."/".$newFileName;

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

		public function uploadMultiImage($image, $dir, $table, $field, $id){
			error_reporting(E_ALL);
			/* initial condition */
			$resultList = array();
			$feedStatus	= "failed";
			$feedType   = "danger";
			$feedMessage= "Something went wrong, failed to upload data!";
			$feedData	= array();

			$temp		= "";
			$counter	= 0;

			/* open connection */ 
			$gate = $this->db;
			if($gate){		

				/*upload image*/
				if(isset($image)){

					foreach($image['tmp_name'] as $key => $tmp_name ){
						$counter++;
					    $file_name = $key.$image['name'][$key];
					    $file_size = $image['size'][$key];
					    $file_tmp  = $image['tmp_name'][$key];
					    $file_type = $image['type'][$key];

						$Validextensions = array("jpeg", "JPEG", "jpg", "JPG", "png", "PNG", "gif", "GIF");
						$temporary 		 = explode(".", $file_name);
						$fileExtension   = end($temporary);
						$newFileName 	 = $dir."_".$id."(".$counter.")".".".$fileExtension;
						$saveAs 		 = "../assets/".$dir."/".$newFileName;

						if (in_array($fileExtension, $Validextensions)) {
							if(move_uploaded_file($file_tmp, $saveAs)){ 
								$temp = ($temp == "") ? $newFileName : $temp.",".$newFileName;
							}

							if($temp != ""){
								$newFileName = $temp;

								$sql = "UPDATE ".$table." SET ".$field."='".$newFileName."' WHERE idData ='".$id."'";
								$result = $this->db->query($sql);
								if($result){
									$feedStatus	= "success";
									$feedType   = "success";
									$feedMessage= "The process has been successful";
								}						
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

		//IMAGE VIDEO
		public function uploadSingleVideo($image, $dir, $table, $field, $id){
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

					$Validextensions = array("mp4", "MP4", "3gpp", "3GPP", "flv", "FLV");
					$temporary 		 = explode(".", $file_name);
					$fileExtension   = end($temporary);
					$newFileName 	 = $dir."_".$id.".".$fileExtension;
					$saveAs 		 = "../assets/".$dir."/".$newFileName;

					if (in_array($fileExtension, $Validextensions)) {
						if(move_uploaded_file($file_tmp, $saveAs)){ 
							$sql = "UPDATE ".$table." SET ".$field."='".$newFileName."', fileSize='".$file_size."' WHERE idData ='".$id."'";
									
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
	}
?>