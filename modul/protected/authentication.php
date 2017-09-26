<?php 
	if (session_status() == PHP_SESSION_NONE) { session_start(); }
	require_once('protected/config.php');
	function login($data){
		/* initial condition */
		$username  		= $data['username'];
		$password		= $data['password'];
		$dataRes		= array();
		$resultList 	= array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => $username.'/'.$password.' '."Local :: username atau password yang anda masukan salah!", "feedData" => array());

		//validation 
		$dataPost = array("username" => $username, "password" => $password);
		$dataPost = json_encode($dataPost);
		if($username != "" && $password != ""){
			$dataRes = requestLoginDplega('flogin','dplega', $dataPost);
			/* result fetch */
			if($dataRes->feedStatus == "success"){	
				$feedData = $dataRes->feedId;

				$_SESSION["login"] 			= $feedData->login;
				$_SESSION["noRegistrasi"] 	= $feedData->noRegistrasi;
				$_SESSION["username"] 		= $feedData->username;
				$_SESSION["nama"] 			= $feedData->nama;
				$_SESSION["userLevel"] 		= $feedData->userLevel;
				$_SESSION["urlGambar"] 		= $feedData->avatar;
				$_SESSION["lingkupArea"] 	= $feedData->lingkupArea;
				$_SESSION["idBatasArea"] 	= $feedData->idBatasArea;
				$_SESSION["statusActive"] 	= $feedData->statusActive;
				$_SESSION["accessList"] 	= $feedData->accessList;

				$resultList = $dataRes;
			}

			$resultList = $dataRes;
		}


		/* result fetch */
		$json = $resultList;
		
		return $json;
	}

	function requestLoginDplega($group, $target, $data){
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

		$response=json_decode($response);
		return $response;
	}

	function requestDataDplega($group, $target){
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
	
	function logout(){
		$json = array( "status" => "failed");

		// remove all session variables		
		unset($_SESSION["nama"]);
		unset($_SESSION["username"]);
		unset($_SESSION["userLevel"]);
		unset($_SESSION["urlGambar"]);

		unset($_SESSION["login"]); 
		unset($_SESSION["noRegistrasi"]);
		unset($_SESSION["username"]);
		unset($_SESSION["nama"]);
		unset($_SESSION["userLevel"]);
		unset($_SESSION["urlGambar"]);
		unset($_SESSION["statusActive"]);
		unset($_SESSION["accessList"]);
		
		if(session_destroy()){ $json = array( "feedStatus" => "success"); } 		
		
		return $json;
	}
?>