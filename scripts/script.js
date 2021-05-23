let counter = 0; // Количество убранных в корзину фруктов
let need; // Количество фруктов, которое необходимо убрать в ящик
let quantity = 10; // Количество фруктов, генерируемых на поле
let fruits = new Array(); // Массив с фруктами
let timeMinut = 60; // Время игры в секундах
// Базовые параметры ajax-запросов
$.ajaxSetup({
	type: 'POST',
	dataType: 'json',
});
// Отправка запроса на сервер
$.ajax({
	url: "server/generation.php", 				
	// После получения ответа сервера
	success: function(result){
		need = result["need"];
		// Генерация фруктов
		for(let i = 1; i <= quantity; ++i)
			fruits[i] = new Fruit(i, result["number"][i]); // Добавление фрукта в массив
	}
});
$("#complete").append("<br>Ты убрал <p style='font-size: 75px;'>" + counter + "</p> фруктов");
setTimeout(function () {
// Обработчик передвижений
for(let i = 1; i <= quantity; ++i){
	// При нажатии на мышь
	fruits[i].fruit.onmousedown = function(e) {
		// Разместить на том же месте, но в абсолютных координатах
		$("#ball" + i).css('position','absolute');
		moveAt(e);
		// Переместим в body, чтобы мяч был точно не внутри position:relative
		document.body.appendChild(fruits[i].fruit);
		// Над другими элементами
		$("#ball" + i).css('zIndex','1000');
		// Перемещение diva при зажатой кнопке мыши
		document.onmousemove = function(e) { moveAt(e); };
		// Действия с divом после разжатия кнопки мыши
		fruits[i].fruit.onmouseup = function() {
			count();
			document.onmousemove = null;
			fruits[i].fruit.onmouseup = null;
		};
	}
	// Отключение Drag’n’Drop браузера для устранения конфликта
	fruits[i].fruit.ondragstart = function() { return false; };
	// Перемещение diva
	function moveAt(e) {
		//mouseCoords(e);
		// Массив с данными для отправки на сервер
		let data = {
			pageX: 			e.pageX,
			offsetWidth: 	fruits[i].fruit.offsetWidth,
			pageY: 			e.pageY,
			offsetHeight: 	fruits[i].fruit.offsetHeight,
		};
		// Отправка запроса на сервер
		$.ajax({
            url: "server/chek_move.php", data: data,
            // После получения ответа сервера
            success: function(result){
				$("#ball" + i).css('left', result["left"]);
				$("#ball" + i).css('top', result["top"]);
			}
        });
	}
/* Координаты мыши
	function mouseCoords(e) {
		// Для браузера IE
		if (document.all)  { 
		  x = event.x + document.body.scrollLeft; 
		  y = event.y + document.body.scrollTop; 
		// Для остальных браузеров
		} else {
		  x = e.pageX; // Координата X курсора
		  y = e.pageY; // Координата Y курсора
		}
		document.getElementById("coords").innerHTML = "X : " + x + ", Y : " + y;
	}*/
}

function count(){
	for(let i = 1; i <= quantity; ++i){
		// Массив с данными для отправки на сервер
		let data = fruits[i].get_coordinates();
		// Отправка запроса на сервер. Проверка принадлежности фигуры заданной области
		$.ajax({
			url: "server/chek_box.php", data: data,
			// После получения ответа сервера
			success: function(result){
				fruits[i].check_container = result["answer"];
			}
		});
		
		setTimeout(function () {
			if (fruits[i].check_container) 
				counter++;
			$("#complete").empty();
			$("#complete").append("<br>Ты убрал <p style='font-size: 75px;'>" + counter + "</p> фруктов");
		}, 100);
	}
	counter = 0;
}

$('#end').click(function(){
	finish();
});

$('#reload').click(function(){
	location.reload();
});

timer();
let flag = true;
// Таймер
function timer(){
	timer = setInterval(
		function () {
			if(flag){
				seconds = timeMinut%60;
				minutes = timeMinut/60%60;
				hour = timeMinut/60/60%60;
				if (timeMinut <= 0) { // Остановка таймера
					clearInterval(timer);
					finish();
				} else { // Работа таймера
					let strTimer = `${Math.trunc(minutes)}:${seconds}`;
					$("#timer").empty();
					$("#timer").append(strTimer);
				}
				--timeMinut;
			}
		},
		1000
	);
 }
 let data_r;
 // Завершение игры
 function finish(){
	flag = false;
	if (need == counter){ // Вывод результата
		$("#result").append("Вы выиграли!!!");
		$("#result").css('color','yellow');
		data_r = { result : "win" };
	}
	else{
		$("#result").append("Вы проиграли!");
		$("#result").css('color','red');
		data_r = { result : "lose" };
	}
	$("#fruits, #task").fadeOut();			
	for(let i = 1; i <= quantity; ++i)
		$("#ball" + i).fadeOut();
	$("#timer").remove(); // Удаление блока с таймером
	$("#end").remove(); // Удаление блока с кнопкой завершения
	$.ajax({
		url: "./data/save_games.php", data: data_r,
		success: function(result){	}
	});
 }
 
	$("#task").append("<p> Для того, чтобы победить в этой игре, ты должен перетащить в фруктовую коробку фрукты с поляны</p>Оставшееся время: <div id='timer'></div>");
	$("#need").append("<br>Убери <p style='font-size: 75px;'>" + need + "</p> фруктов");
}, 100);

class Fruit{
	constructor(num, type){
		this.num = num;
		this.type = type;
		
		$("#fruits").append("<div id='ball" + this.num + "' class='balls'><img src='img/" + this.type + ".png' id='ball'></div>");
		this.fruit = document.getElementById("ball" + this.num); 
		this.check_container;
	}

	get_coordinates(){
		let box = this.fruit.getBoundingClientRect();
		return {
			left: box.left + pageXOffset,
			top: box.top + pageYOffset
		};
	}
}