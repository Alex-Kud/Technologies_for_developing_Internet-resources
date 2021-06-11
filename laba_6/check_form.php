<?php
session_start();
$ans = "true";
$data = array(
    "header" 	=> array(
		"name" 	=> "header",
		"value" => "",
        "error" => "false",
        "text_error" => ""
    ),
    "text" 		=> array(
		"name" 	=> "text",
		"value" => "",
        "error" => "false",
        "text_error" => ""
    ),
    "teg" 		=> array(
		"name" 	=> "teg",
		"value" => "",
        "error" => "false",
        "text_error" => ""
    ),
	"category" 	=> array(
		"name" 	=> "category",
		"value" => "",
        "error" => "false",
        "text_error" => ""
    ),
	"visibility"=> array(
		"name" 	=> "visibility",
		"value" => "",
        "error" => "false",
        "text_error" => ""
    ),
	"comment" 	=> array(
		"name" 	=> "comment",
		"value" => "",
        "error" => "false",
        "text_error" => ""
    ),
);

foreach ($data as $key => $value) {
    if ($_POST[$key] == "") {
        $data[$key]["error"] = "true";
        $data[$key]["text_error"] = "Это поле обязательно для заполнения";
    }
	$data[$key]["value"] = $_POST[$key];
}

if(!preg_match("/^[A-ZА-Я][a-zа-я\s\!\?\,]{10,30}$/",$_POST["header"]) && ($data["header"]["error"] == "false")){
	    $data["header"]["error"] = "true";
        $data["header"]["text_error"] = "Вы допустили ошибку! Это поле может содержать только строчные символы русского и/или латинского алфавита. Первая буква - заглавная. Длина заголовка от 10 до 30 символов";
}

if(!preg_match("/^[A-ZА-Я].{10,1000}$/",$_POST["text"]) && ($data["text"]["error"] == "false")){
	    $data["text"]["error"] = "true";
        $data["text"]["text_error"] = "Вы допустили ошибку! Первый символ - заглавная буква русского или латинского алфавита. Длина текста от 10 до 1000 символов";
}

if(!preg_match("/^#[a-zа-я0-9]{1,15}$/",$_POST["teg"]) && ($data["teg"]["error"] == "false")){
	    $data["teg"]["error"] = "true";
        $data["teg"]["text_error"] = "Вы допустили ошибку! Хештег должен начинаться с символа '#'. Это поле может содержать только строчные символы русского и/или латинского алфавита, а также цифры.  Длина текста хештега от 1 до 15 символов";
}

foreach ($data as $key => $val) {
    if ($data[$key]["error"] == "true")
		$ans = "false";
}

if ($ans != "false" ){
	    $file_data = "Автор поста: " . $_SESSION["user_login"] . "\n";
    foreach ($data as $key => $value) {
        $file_data .= $data[$key]["name"] . ": " . $data[$key]["value"] . "\n";
    }
	$file_data .= "\n\n";
    file_put_contents('data/posts.txt', $file_data, FILE_APPEND);
}

$answer = array(
	"data" => $data,
	"answer" => $ans
);

echo json_encode($answer);