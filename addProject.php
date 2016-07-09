<?php
	
	$name = $_POST['projectName'];
	$data = array();
	
	if($name === ""){
		$data['status'] = 'error';
		$data['text'] = 'заполните имя!';
	}else{
		$data['status'] = 'ok!';
		$data['text'] = 'maladec!';
	}
	header("Content-type: application/json");
	echo json_encode($data);
	exit;
?>