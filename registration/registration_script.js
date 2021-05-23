$(document).ready(function(){
	$('#registration').click(function(event){
        // собираем данные с формы
        event.preventDefault();
		data = $('form').serialize();
        // отправляем данные
        $.ajax({
            url: "./registration_page.php", // куда пойдёт запрос
            type: "post", 					// метод передачи
            dataType: "json", 				// тип передачи данных
            data: data,
            // после получения ответа сервера
            success: function(result){
				res(data, result);
			}
        });
		return false;
    });
});

function res(data, result){
	if (result["answer"] == "false"){
		let index = ["login", "password", "password_2"];
		for (let i = 0; i < index.length; ++i){
			if(result["data"][index[i]]["error"] == "true")
				$('#'+index[i]+'_error').text(result["data"][index[i]]["text_error"]);
			else
				$('#'+index[i]+'_error').empty();
		}
	}
	else
		window.location.replace('/account.php');
}