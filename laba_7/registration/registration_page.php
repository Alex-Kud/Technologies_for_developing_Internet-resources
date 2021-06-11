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
    ),
	"password_2"=> array(
		"name" 	=> "password_2",
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

if(!preg_match("/^[A-Za-z0-9]{5,}$/",$_POST["password"]) && ($data["password"]["error"] == "false")){
	$data["password"]["error"] = "true";
	$data["password"]["text_error"] = "Вы допустили ошибку! Пароль должен содержать не менее 5 симвоолов латинского алфавита и/или цифр";
}

if(!preg_match("/^[A-Za-z0-9]{5,}$/",$_POST["password_2"]) && ($data["password_2"]["error"] == "false")){
	$data["password_2"]["error"] = "true";
	$data["password_2"]["text_error"] = "Вы допустили ошибку! Пароль должен содержать не менее 5 симвоолов латинского алфавита и/или цифр";
}

elseif ($_POST["password"] != $_POST["password_2"]){
	$data["password_2"]["error"] = "true";
    $data["password_2"]["text_error"] = "Пароли не совпадают";
}

if(check_user($_POST["login"], $_POST["password"]) != "1"){
	$data["login"]["error"] = "true";
	$data["login"]["text_error"] = "Логин уже занят, повторите регистрацию под другим логином";
}

elseif(!preg_match("/^[A-Za-z0-9]{5,}$/",$_POST["password_2"]) && ($data["password_2"]["error"] == "false")){
	$data["login"]["error"] = "true";
	$data["login"]["text_error"] = "Вы допустили ошибку! Пароль должен содержать не менее 5 симвоолов латинского алфавита и/или цифр";
}

foreach ($data as $key => $val)
    if ($data[$key]["error"] == "true")
		$ans = "false";

if ($ans != "false" ){
	add_user($_POST["login"], array("password" 	=> $_POST["password"]));
	$_SESSION['is_login'] = "yes";
	$_SESSION["user_login"] = $_POST["login"];
}
else
	$_SESSION['is_login'] = "no";

$answer = array(
	"data" => $data,
	"answer" => $ans
);

echo json_encode($answer);