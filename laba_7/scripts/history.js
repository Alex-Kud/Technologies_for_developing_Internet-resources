let win = 0;
let lose = 0;
let res;
// Отправка запроса на сервер
$.ajax({
	url: "server/history.php", 		// Куда пойдёт запрос
	type: "post", 					// Метод передачи
	dataType: "json", 				// Тип передачи данных
	//data: data,
	// После получения ответа сервера
	success: function(result){
		// Формирование таблицы с результатами
		let table = document.querySelector('#table');
		// Массив для формирования таблицы ответов
		let array = new Array(result.length);
		for (var i = 0; i < result.length; i++){
			array[i] = new Array(2);
			array[i][0] = result[i]["time_end"];
			array[i][1] = result[i]["result"];
			if (result[i]["result"] == "win")
				win++;
			else
				lose++;
		}
		let content = "<table>";
		content += '<tr><th>Время игры</th><th>Результат</th></tr>';
			for (let i = 0; i < result.length; i++){
				content += '<tr>';
				for(j = 0; j < 2; j++)
					content += '<td>' + array[i][j] + '</td>';
				content += '</tr>';
			}
		content += "</table>"
		res = win > lose ? "Молодчина! Отлично справляешься!" :
		(win < lose) ? "Потренируйся ещё немного. У тебя обязательно получится" :
		((lose == 0) && (win > 5)) ? "Да ты гений!" : "Неплохо. Но могло быть и лучше";
		$('#table').append(content);
		$('#result').append("Win: " + win + " , lose: " + lose + "<br>" + res);
	}
});