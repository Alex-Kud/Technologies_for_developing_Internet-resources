$(document).ready(function(){
    $('#publish').click(function(event){
        // собираем данные с формы
        event.preventDefault();
		data = $('form').serialize();
        // отправляем данные
        $.ajax({
            url: "check_form.php", 			// куда пойдёт запрос
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
		let index = ["header", "text", "teg", "category", "visibility", "comment"];
		for (let i = 0; i < index.length; ++i){
			if(result["data"][index[i]]["error"] == "true")
				$('#'+index[i]+'_error').text(result["data"][index[i]]["text_error"]);
			else
				$('#'+index[i]+'_error').empty();
		}
	}
	else
		window.location.replace('published.php');
}




/*
$('form').submit(event => {
	event.preventDefault();

	$.ajax({
		url: 'server.php',
		type: 'post',
		dataType: 'json',
		data: $('form').serialize(),
		success: alert(data) alert ("All good!") data => set_res(data)
	});
});
/*
const responses = ['success', 'invalid-value', 'empty'];

const set_color = (id, r) => $(id).css('color', r == 0 ? 'green' : r == 1 ? 'yellow' : 'red');

const set_res = data => {
	alert ("All good!");
	const res_mac = data.res_mac;
	const res_date = data.res_date;

	set_color('#res_mac', res_mac);
	set_color('#res_date', res_date);

	$('#res_mac').text(responses[res_mac]);
	$('#res_date').text(responses[res_date]);
};*/
