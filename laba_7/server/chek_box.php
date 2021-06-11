<?php
session_start();
if(($_POST["left"] > 400) && ($_POST["top"] > 420) && ($_POST["left"] < 850) && ($_POST["top"] < 575))
	$ans = true;
else
	$ans = false;
$answer = array("answer" => $ans);
echo json_encode($answer);