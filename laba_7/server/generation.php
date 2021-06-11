<?php
$need = rand(1,10);
$number = array();
for ($i = 1; $i <= 10; $i++) {
    $number[$i] = rand(1,8);
}
$answer = array(
	"need" => $need,
	"number" => $number
);
echo json_encode($answer);