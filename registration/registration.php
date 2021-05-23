<?php
session_start();
if (isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes"){
    header('Location: ../account.php');
}
?>

<!DOCTYPE html>
<html>
    <head>
        <title>Регистрация</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
	<h1>Регистрация</h1>
		<form action="registration.php" method="POST"><br>
			<div id="login_error" class="error"></div>
			<input name="login" placeholder="Логин"><br><br>
			<div id="password_error" class="error"></div>
			<input name="password" placeholder="Пароль"><br><br>
			<div id="password_2_error" class="error"></div>
			<input name="password_2" placeholder="Повторный пароль"><br><br>
			<input type="submit" id="registration" value="Зарегистрироваться"><br><br>
			<a href="../login/login.php">Авторизоваться</a><br><br>
		</form>

        <script src="../scripts/jquery-3.3.1.js" type="text/javascript"></script>
        <script defer src="registration_script.js"></script>
        <link rel="stylesheet" href="../style/style.css">
    </body>
</html>