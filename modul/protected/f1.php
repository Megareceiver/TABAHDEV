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
		
	}
?>