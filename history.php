<?php
session_start();
if (!(isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes"))
    header('Location: /login/login.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <title>History</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
		<h1>History</h1>
		<div id="history_table">
			<b>Привет, <?php echo $_SESSION['user_login']; ?></b><br>
			<a href="logout.php">Выйти из аккаунта</a><br>
			<a href="index.php">Сыграть снова</a>
			<div id="result"</div>
			<div id="table" align="center" ></div>
		</div>
        <script src="scripts/jquery-3.3.1.js" type="text/javascript"></script>
        <script defer src="scripts/history.js"></script>
        <link rel="stylesheet" href="style/style.css">
    </body>
</html>