<?php
session_start();
if (!(isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes")){
    header('Location: /registration.php');
}

?>

<!DOCTYPE html>
<html>
    <head>
        <title>Social Network</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
    </head>
    <body>
	<h1>Пост добален</h1>
	    <div>
			<b>Привет, <?php echo $_SESSION['user_login']; ?></b><br><br>	
			<p>Вы только что успешно добавили пост</p>
			<a href="index.php">Добавить ещё один пост</a>
			<br><br>
			<a href="logout.php">Выйти из аккаунта</a>
		</div>

        <script src="jquery-3.3.1.js" type="text/javascript"></script>
        <script defer src="script.js"></script>
        <link rel="stylesheet" href="style.css">
    </body>
</html>