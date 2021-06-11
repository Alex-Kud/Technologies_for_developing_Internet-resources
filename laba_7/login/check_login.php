<?php
include_once "data/save_users.php";
session_start();

if (isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes")
    header('Location: ../account.php');

$ans = "true";
$data = array(
	"login" 	=> array(
		"name" 	=> "login",
		"value" => "",
        "error" => "false",
        "text_error" => ""
    ),
    "password" 	=> array(
		"name" 	=> "password",
		"value" => "",
        "error" => "false",
        "text_error" => ""
    )
);

foreach ($data as $key => $value) {
    if ($_POST[$key] == "") {
        $data[$key]["error"] = "true";
        $data[$key]["text_error"] = "Это поле обязательно для заполнения";
    }
	$data[$key]["value"] = $_POST[$key];
}

if (check_user($_POST["login"], $_POST["password"]) == 1){
	$data["login"]["error"] = "true";
	$data["login"]["text_error"] = "Введен несуществующий логин";
}

if (check_user($_POST["login"], $_POST["password"]) == 2){
	$data["password"]["error"] = "true";
	$data["password"]["text_error"] = "Введен неверный пароль";
}

foreach ($data as $key => $val)
    if ($data[$key]["error"] == "true")
		$ans = "false";

if ($ans != "false" ){
	$_SESSION['is_login'] = "yes";
    $_SESSION["user_login"] = $_POST["login"];
}
else
	$_SESSION['is_login'] = "no";

$answer = array(
	"data" 		=> $data,
	"answer" 	=> $ans
);

echo json_encode($answer);