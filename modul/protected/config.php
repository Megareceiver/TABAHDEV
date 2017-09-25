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
		return 'http://dev.dplega.yanbangsos.jabarprov.go.id/api/router.php/';
	}
?>