<?php
session_start();
function get_games_data(){
    $file = file_get_contents('data/games.txt', FILE_USE_INCLUDE_PATH) ;
    if ($file)
        return json_decode($file, true);
    else {
        $file = array();
        return $file;
    }
}
$data = get_games_data();
foreach ($data as $key => $value) 
    if ($key == $_SESSION['user_login']) 
        $data = $value;
echo json_encode($data);