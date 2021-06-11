<?php
session_start();
$_SESSION['is_login'] = "no";
unset($_SESSION['user_login']);;
header('Location: /login/login.php ');