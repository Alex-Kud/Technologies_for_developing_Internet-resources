<?php
include_once "data/save_users.php";
session_start();
$login_error = false;
$other_error = false;
$password_error = false;
$name_error = false;
$surname_error = false;
$age_error = false;
$city_error = false;
if (isset($_SESSION['is_login']) && $_SESSION['is_login'] == "yes"){
    header('Location: /account.php');
}

if(isset($_POST["login"]) && isset($_POST["password"]) && isset($_POST["password_2"])){
    if ($_POST["password"] == $_POST["password_2"]){
		if (($_POST["name"] != '') && preg_match("/^[A-ZА-Я][a-zа-я]*$/",$_POST["name"])){ 				//регулярочка для имени
			if (($_POST["surname"] != '') && preg_match("/^[A-ZА-Я][a-zа-я]*$/",$_POST["surname"])){ 			//регулярочка для имени
				if (($_POST["age"] != '') && preg_match("/[0-9]/",$_POST["age"])){ 			//регулярочка на включение only цифр
					if (($_POST["city"] != '') && preg_match("/^[A-ZА-Я][a-zа-я]*$/",$_POST["city"])){ 	//регулярочка для имени
						if (add_user($_POST["login"], array("password" 	=> $_POST["password"], 
															"name" 		=> $_POST["name"],
															"surname" 	=> $_POST["surname"],
															"age" 		=> $_POST["age"],
															"city" 		=> $_POST["city"]))) {
							$_SESSION['is_login'] = "yes";
							$_SESSION["user_login"] = $_POST["login"];
							header('Location: /account.php');
						} else $login_error = true;
					} else $city_error = true;
				} else $age_error = true;
			} else $surname_error = true; 
		} else $name_error = true;
    } else {
        $_SESSION['is_login'] = "no";
        $password_error = true;
    }
} elseif (isset($_POST["login"]) || isset($_POST["password"]) || isset($_POST["password_2"]))
        $other_error = true;

$forma = '<h1 >Регистрация</h1 >';
if ($login_error)
	$forma = $forma . '<p>Логин уже занят, повторите регистрацию под другим логином</p>';
if ($other_error)
	$forma = $forma . '<p>Кажется, что-то пошло не так. Попробуйте ещё раз</p>';
if ($password_error)
	$forma = $forma . '<p>Пароли не совпадают. Попробуйте ещё раз</p>';
if ($name_error)
	$forma = $forma . '<p>Некорректно введено имя. Попробуйте ещё раз</p>';
if ($surname_error)
	$forma = $forma . '<p>Некорректно введена фамилия. Попробуйте ещё раз</p>';
if ($age_error)
	$forma = $forma . '<p>Некорректно введён возраст. Попробуйте ещё раз</p>';
if ($city_error)
	$forma = $forma . '<p>Некорректно введён город. Попробуйте ещё раз</p>';

$forma = $forma . '<form action="registration.php" method="POST">
				   <input name="name" required  placeholder="Имя"><br>
				   <input name="surname" required  placeholder="Фамилия"><br>
				   <input name="age" required type="number" placeholder="Возраст"><br>
				   <input name="city" required  placeholder="Город"><br>
				   <input name="login" required  placeholder="Логин"><br>
				   <input name="password" required  placeholder="Пароль"><br>
				   <input name="password_2" required  placeholder="Повторный пароль"><br>
				   <input type="submit" value="Зарегистрироваться">
				   </form>
				   <a href="login.php">Авторизоваться</a>';
echo $forma;