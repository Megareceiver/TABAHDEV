<?php
	//declare 
	$error = 0; //error init state
	$json = array( "feedStatus" => "forbidden", "feedType" => "danger", "feedMessage" => "Akses ditolak!", "feedData" => array());
	$route = null;

	if(isset($_GET['session']) && $_GET['session'] != ""){
		switch($_GET['group']){
			case "f1"			: require_once('protected/f1.php'); $route = new F1();break;
			case "f3"			: require_once('protected/f3.php'); $route = new F3(); break;
			case "f4"			: require_once('protected/f4.php'); $route = new F4(); break;
			case "fNotification": require_once('protected/fNotification.php'); $route = new Notification(); break;
			case "fLogin"		: require_once('protected/authentication.php'); $route = new Authentication(); break;
			case "dumb"			: require_once('protected/dumb.php'); $route = new Dumb(); break;
			case "settings"		: require_once('protected/settings.php'); $route = new Settings(); break;
			default  			: $error = 1; break;
		}
		
		if($error != 1){
			switch($_GET['session']){
				/* auth session */
				case 'login':  
					$json = $route->login($_POST);
				break;
				
				case 'logout':  
					$json = $route->logout();
				break;
				/* end auth session */

				/* dumb session */
				case 'backup':  
					if(authChecker('3,7') == 0) $json = backup();
				break;
				
				case 'restore':  
					if(authChecker('7') == 0) $json = restore($_POST);
				break;
				/* end dumb session */

				case 'addData':
					/*if(authChecker() == 0)*/ $json = $route->addData($_POST, $_GET['target']);
				break;
				
				case 'updateData':
					/*if(authChecker() == 0)*/ $json = $route->updateData($_POST, $_GET['target']);
				break;
				
				case 'removeData':
					/*if(authChecker() == 0)*/ $json = $route->removeData($_POST, $_GET['target']);
				break;
				
				case 'requestData':
					$json = $route->requestData($_POST, $_GET['target']);
				break;
				
				default:
					$json = array( "feedStatus" => "failed", "feedType" => "danger", "feedMessage" => "Terjadi kesalahan fatal, proses dibatalkan!", "feedData" => array());
				break;

			}
		}
	}
	

	/* Send as JSON */
	 header("Content-Type: application/json", true);

	/* Return JSON */
	echo json_encode($json);
?>

<?php
	//functions section
	function authChecker($accessLevel = ''){
		$error = 1; 
		if (session_status() == PHP_SESSION_NONE) {session_start();} // session start

		if(isset($_SESSION['TABAH_login']) && $_SESSION['TABAH_login'] == "yes") $error = 0;
		if($accessLevel != ''){
			$error = 1;
			$temp  = is_array($accessLevel) ? $accessLevel : explode(',',$accessLevel);
			 foreach($temp as $level){
				if(isset($_SESSION['TABAH_userLevel']) && $_SESSION['TABAH_userLevel'] == $level) $error = 0;
			}
		}
		
		return $error;
	}
?>