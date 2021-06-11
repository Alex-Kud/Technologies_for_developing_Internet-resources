<?php
session_start();
// Установка временной зоны по умолчанию.
date_default_timezone_set("Europe/Moscow");

add_game();
function get_user_data(){
    $file = file_get_contents('data/games.txt', FILE_USE_INCLUDE_PATH) ;
    if ($file)
        return json_decode($file, true);
    else {
        $file = array();
        return $file;
    }
}

function add_game(){
	$result = $_POST["result"];   // win или lose - результат игры
	$data = get_user_data();
	$time_end = date("Y-m-d H:i:s"); 

	$game_data = array(
		"result" => $result,
		"time_end" => $time_end
	);
	if (!check_user()) // Если пользователь существует, обновляем данные. Иначе создаем пользователя
		$data[$_SESSION['user_login']] = array( "0" => $game_data );
	else
		array_push($data[$_SESSION['user_login']], $game_data);
	
    $json_str = json_encode($data, JSON_UNESCAPED_UNICODE);
    file_put_contents('data/games.txt', $json_str);
    return true;
}

function check_user(){
    $data = get_user_data();
    return array_key_exists($_SESSION['user_login'], $data);
}