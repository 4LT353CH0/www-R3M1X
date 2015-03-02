<?php
	require_once('lib/Mobile_Detect.php');
	$detect = new Mobile_Detect();
	/*var_dump($detect->isiOS());
	var_dump($detect->isAndroid());
	var_dump($detect->isMobile());
	var_dump($detect->version('Android'));*/
	
	// Par défaut, environnement desktop et OS inconnu
	$mobile_environment = array(
		'type' => 'desktop',
		'os' => 'unknown'
	);
	
	if($detect->isMobile()){
		$mobile_environment['type'] = 'mobile';
		if($detect->isTablet()){
			$mobile_environment['type'] = 'tablet';
		}
		
		// Détection de l'OS
		if($detect->isiOS()){
			$mobile_environment['os'] = 'ios';
		}
		if($detect->isAndroidOS()){
			$mobile_environment['os'] = 'android';
		}
		if($detect->isWindowsMobileOS()){
			$mobile_environment['os'] = 'windows';
		}
		if($detect->isBlackBerryOS()){
			$mobile_environment['os'] = 'blackBerry';
		}
	}
?>

<?php if($mobile_environment['type'] == 'tablet'): ?>
<meta name="viewport" content="width=1100">
<?php endif; ?>
<?php if($mobile_environment['type'] == 'mobile'): ?>
<meta name="viewport" content="width=device-width">
<meta name="format-detection" content="telephone=no">
<?php endif; ?>