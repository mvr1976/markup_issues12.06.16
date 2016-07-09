<?php
	$name = $_POST['projectName'];
	$data = array();
	$data['mes'] = 'ok!';
	if($name === ""){
		$data['text'] = 'заполните имя!';
	}else{
		$data['text'] = 'maladec!';
	}
	header("Content-type: application/json");
	echo json_encode($data);
	exit;
?>