<?php
// аккаунт, личный кабинет

session_start();
if (isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes")
    header('Location: /index.php');
else
    header('Location: /registration.php');