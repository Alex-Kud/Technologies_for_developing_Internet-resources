<?php
include_once "data/save_users.php";
session_start();

$login_error = false;
$password_error = false;
$other_error = false;

if (isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes") {
    header('Location: /account.php');
}

if (isset($_POST["login"]) && isset($_POST["password"])) {
    // обработка формы
    if (check_user($_POST["login"], $_POST["password"]) == 0) {
        $_SESSION['is_login'] = "yes";
        $_SESSION["user_login"] = $_POST["login"];
        header('Location: /account.php');

    } else {
        $_SESSION['is_login'] = "no";
		if (check_user($_POST["login"], $_POST["password"]) == 1) 
			$login_error = true;
		if (check_user($_POST["login"], $_POST["password"]) == 2) 
			$password_error = true;
    }
} else
    if ((isset($_POST["login"]) || isset($_POST["password"])))
        $other_error = true;

$forma = '<h1 >Авторизация</h1 >';
if ($login_error)
	$forma = $forma . "<p>Введен несуществующий логин</p>";
elseif ($password_error)
	$forma = $forma . "<p>Введен неверный пароль</p>";
elseif ($other_error)
	$forma = $forma . "<p>Что-то пошло не так. Попробуйте ещё раз</p>";

$forma = $forma . '<form action="login.php" method="POST">
				   <input name="login" required placeholder="Логин"><br>
				   <input name = "password" required placeholder="Пароль"><br>
				   <input type="submit" value="Войти">
				   </form>
				   <a href = "registration.php" >Зарегистрироваться!</a>';
echo $forma;