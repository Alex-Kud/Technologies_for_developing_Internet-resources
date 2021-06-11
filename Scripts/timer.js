function timer(){
    generation_question();
    var t = document.getElementById('time').value;
    timeMinut = parseInt(document.getElementById('time').value) * 60;
    if(isNaN(t) || (t < 1)) 
        alert ('Введите время выполнения теста!');
    else{
        if (t > 500) {
            timeMinut = 500*60;
            alert ('Вы ввели слишком большое время выполнения теста. Это не \n\
хорошо! Время выполнения сокращно до 500 минут. Это должно хватить.');
        }
        document.getElementById('content').innerHTML = '';
        shows = '';
        shows += '<div id="timer_head">Осталось:</div>';
        shows += '<div id="timer"></div>';
        shows += '<div id="question"> Выберите номер вопроса с помощью кнопок справа</div>';
        shows += '<div id="answer"></div>';
        shows += '<div id = "buttons">';
        shows += '<input class="buttons_q" type="button" value="1" onclick="show_question(1)"><br>';
        shows += '<input class="buttons_q" type="button" value="2" onclick="show_question(2)"><br>';
        shows += '<input class="buttons_q" type="button" value="3" onclick="show_question(3)"><br>';
        shows += '<input class="buttons_q" type="button" value="4" onclick="show_question(4)"><br>';
        shows += '<input class="buttons_q" type="button" value="5" onclick="show_question(5)"><br>';
        shows += '<input class="buttons_q" type="button" value="6" onclick="show_question(6)"><br>';
        shows += '</div><br>';
        shows += '<input id="finish" type="button" value="Завершить тестирование" onclick="Finish()">';
        document.getElementById('content').innerHTML = shows;
        var timerShow = document.getElementById('timer');
        timer = setInterval(
            function () {
                seconds = timeMinut%60;
                minutes = timeMinut/60%60;
                hour = timeMinut/60/60%60;
                if (timeMinut <= 0) {
                    clearInterval(timer);
                    Finish();
                } else {
                    let strTimer = `${Math.trunc(hour)}:${Math.trunc(minutes)}:${seconds}`;
                    timerShow.innerHTML = strTimer;
                }
                --timeMinut;
            },
            1000
        );
    }
}