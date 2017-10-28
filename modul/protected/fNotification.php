<?php
	Class Notification {
		public function __construct(){
			if (session_status() == PHP_SESSION_NONE) {session_start();} // session start
			require_once('protected/config.php');
			$this->db = openGate();
		}

		public function requestData($post, $target){
			switch($target){
				
				case "getNotification" : 
					$resultBox = $this->fetchSingleRequest('tabah_901_notifications', "*", "targetUser = '".$_SESSION['username']."' OR targetUser = 'public' OR createdBy = '".$_SESSION['username']."'ORDER BY idData DESC"); 
					$notifList = $resultBox['feedData'];
					// $unread = array();
					// $read   = array();
					// foreach ($notifList as $value) {
					// 	if($value == "0"){
							
					// 	}
					// }

					// $resultList
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
				case "f110": $resultList = getNotification($data); break;
				case "f111": $resultList = checkNotif($data); break;
				
				default	   : $resultList = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!", "feedData" => array()); break;
			}
			
			/* result fetch */
			$json = $resultList;
			
			return $json;
		}

		public function getNotification($data){
			/* initial condition */
			$resultList  = array();
			$table 		 = "";
			$field 		 = array();
			$readData	 = array();
			$readData2	 = array();
			$unReadData	 = array();
			$unReadData2	 = array();
			$collectData = array();
			$rows		 = 0;
			$condition 	 = "";
			$orderBy	 = "";
			$error		 = 0;
			$errorType   = "";
			$errorMsg	 = "";
		
			/* open connection */ 
			$gate = openGate();
			if($gate){		
				// connection = true
				$sql = 	
				"
				SELECT `idData`, `deskripsi`, `waktu`, `targetUser`, `statusBaca`
				FROM dplega_901_notifications
				WHERE 
				(
					targetUser = '".$_SESSION['TABAH_username']."'
				OR
					targetUser = 'public'
				OR
					createdBy = '".$_SESSION['TABAH_username']."'
				)
				ORDER BY idData DESC";
						
				$result = mysqli_query($gate, $sql);
				if($result){
					$record    = array();  
					$fetch 	   = array(); 
					$group;
					if(mysqli_num_rows($result) > 0) {
						while($row = mysqli_fetch_assoc($result)) {
							if($row["statusBaca"] == 0){
								$unReadData = array(
									"idData"   			=> $row['idData'],
									"deskripsi" 		=> $row['deskripsi'],
									"waktu" 			=> $row['waktu'],
									"targetUser" 		=> $row['targetUser'],
									"readStatus" 		=> $row['statusBaca']
								);
								array_push($unReadData2, $unReadData);
								unset($unReadData);
								$unReadData = array();
							}else{
								$readData = array(
									"idData"   			=> $row['idData'],
									"deskripsi" 		=> $row['deskripsi'],
									"waktu" 			=> $row['waktu'],
									"targetUser" 		=> $row['targetUser'],
									"readStatus" 		=> $row['statusBaca']
								);
								array_push($readData2, $readData);
								unset($readData);
								$unReadData = array();
							}							
						}
						$fetch = array(
							'group' => 'Baru',
							'list'	=> $unReadData2
						);
						$record = array(
							'group' => 'Riwayat',
							'list'	=> $readData2
						);
						array_push($collectData, $fetch);
						array_push($collectData, $record);
						unset($fetch); 
						unset($unReadData); 
						// $readData = array();
						$fetch = array();
						$unReadData = array();

						$sql = 	
						"
						UPDATE dplega_901_notifications SET statusBaca = '1'
						WHERE 
						(
							targetUser = '".$_SESSION['TABAH_username']."'
						OR
							targetUser = 'public'
						OR
							createdBy = '".$_SESSION['TABAH_username']."'
						)
						AND 
							statusBaca = '0'
						ORDER BY idData DESC";
								
						$result = mysqli_query($gate, $sql);

						$resultList = array( "feedStatus" => "succes", "feedMessage" => "Data ditemukan!", "feedData" => $collectData);
					}else {
						$resultList = array( "feedStatus" => "succes", "feedMessage" => "Data tidak ditemukan!", "feedData" => array());
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

		public function checkNotif($data){
			/* initial condition */
			$resultList  = array();
			$table 		 = "";
			$field 		 = array();
			$readData	 = array();
			$readData2	 = array();
			$unReadData	 = array();
			$unReadData2	 = array();
			$collectData = array();
			$rows		 = 0;
			$condition 	 = "";
			$orderBy	 = "";
			$error		 = 0;
			$errorType   = "";
			$errorMsg	 = "";
		
			/* open connection */ 
			$gate = openGate();
			if($gate){		
				// connection = true
				$sql = 	
				"
				SELECT idData
				FROM dplega_901_notifications
				WHERE 
				(
					targetUser = '".$_SESSION['TABAH_username']."'
				OR
					targetUser = 'public'
				OR
					createdBy = '".$_SESSION['TABAH_username']."'
				)
				AND 
					statusBaca = '0'
				ORDER BY idData DESC";
						
				$result = mysqli_query($gate, $sql);
				if($result){
					if(mysqli_num_rows($result) > 0) {
						$resultList = array( "feedStatus" => "succes", "feedMessage" => "Data ditemukan!", "feedData" => array('found' => 'yes'));
					}else {
						$resultList = array( "feedStatus" => "succes", "feedMessage" => "Data tidak ditemukan!", "feedData" => array('found' => 'no'));
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
	}
?>