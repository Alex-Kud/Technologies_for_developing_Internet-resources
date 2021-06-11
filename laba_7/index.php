<?php
session_start();
if (!(isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes"))
    header('Location: /login/login.php');
?>

<!DOCTYPE html>
<!--Лаба 7
Вариант 12
Кудашов Александр-->
<html>
    <head>
        <title>Game Fruits</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
		<b>Привет, <?php echo $_SESSION['user_login']; ?></b><br>
		<a href="logout.php">Выйти из аккаунта</a>
		<a href="history.php">Посмотреть историю игр</a>
		<div id="task"></div>
		<div id="need"></div>
		<div id="complete"></div>
		<input type="button" value="Сыграть снова" id="reload">
		<input type="button" value="Завершить" id="end">
		<div id="game">
			<div id="fruits"></div>
			<div id="container">
				<img src="img/box.png" id="contain">
			</div>
		</div>
		<div id="result"></div>
		
        <script src="scripts/jquery-3.3.1.js" type="text/javascript"></script>
        <script defer src="scripts/script.js"></script>
        <link rel="stylesheet" href="style/style_main.css">
    </body>
</html>