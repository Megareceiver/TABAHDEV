<?php 		
	define('db_host', "localhost");
	define('db_user', "root");
	define('db_pass', "");
	define('db_name', "tabah_dumb");
	
	function openGate(){
		
		// Create connection
		$gate = mysqli_connect(db_host, db_user, db_pass, db_name);
		return $gate;
	} 
	
	function closeGate($gate){
		mysqli_close($gate);
	}

	function getApiUrl(){
		return 'http://172.16.11.76/DPLEGA/api/router.php/';
	}
?>