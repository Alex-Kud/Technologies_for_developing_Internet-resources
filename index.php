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
		<h1>Личный кабинет</h1>
	    <div class="input_box">
			<p>Привет, <?php echo $_SESSION['user_login']; ?></p>
			
				<form>
				<br>
				<div class="input">
					<p>Введите заголовок поста: </p>
					<div id="header_error" class="error"></div>
					<input name="header" id="header" placeholder="Заголовок" >
				</div>
				<div class="input">	
					<p>Введите текст поста: </p>
					<div id="text_error" class="error"></div>
					<textarea name="text" id="text" rows="5" placeholder="Текст поста"></textarea>
				</div>	
				<div class="input">
					<p>Введите хештег к посту: </p>
					<div id="teg_error" class="error"></div>
					<input name="teg" id="teg" placeholder="Хештег">
				</div>
				<div class="input">	
					<p>Выберите категорию поста: </p>
					<div id="category_error" class="error"></div>
					<select name="category" id="category">
							<option value="games"> Игры </option>
							<option value="news"> Новости </option>
							<option value="science"> Наука </option>
							<option value="humor"> Юмор </option>
					</select>			
				</div>
				<div class="input">	
					<p>Выберите видимость поста: </p>
					<div id="visibility_error" class="error"></div>
					<select name="visibility" id="visibility">
							<option value="all"> Видно всем </option>
							<option value="friends"> Видно друзьям </option>
							<option value="good_friends"> Для близких друзей </option>
					</select>			
				</div>
				<div class="input">	
					<p>Разрешить комментарии для поста: <br>
					<input id="radio" name="comment" type="radio" value="true" checked>Да
					<input id="radio" name="comment" type="radio" value="false">Нет</p>
					<!--<input type="checkbox" name="comment" id="comment">-->
				</div>		
					<input type="submit" id="publish" value="Опубликовать">
					<br><br>
				</form>
			
			
			<a href="logout.php">Выйти из аккаунта</a>
		</div>

        <script src="jquery-3.3.1.js" type="text/javascript"></script>
        <script defer src="script.js"></script>
        <link rel="stylesheet" href="style.css">
    </body>
</html>