<?php
session_start();
$answer = array(
	"left" => (string)($_POST["pageX"] - $_POST["offsetWidth"] / 2) . "px",
	"top" => (string)($_POST["pageY"] - $_POST["offsetHeight"] / 2) . "px"
);
echo json_encode($answer);