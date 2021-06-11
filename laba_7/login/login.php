<?php
session_start();
if (isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes")
    header('Location: ../account.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Авторизация</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
	<h1>Авторизация</h1>
		<form action="check_login.php" method="POST">
		   <br>
		   <div id="login_error" class="error"></div>
		   <input name="login" placeholder="Логин"><br><br>
		   <div id="password_error" class="error"></div>
		   <input name="password" placeholder="Пароль"><br><br>
		   <input type="submit" id="login" value="Войти"><br><br>
		   <a href = "../registration/registration.php" >Зарегистрироваться!</a><br><br>
		</form>
		
        <script src="../scripts/jquery-3.3.1.js" type="text/javascript"></script>
        <script defer src="login_script.js"></script>
        <link rel="stylesheet" href="../style/style.css">
    </body>
</html>