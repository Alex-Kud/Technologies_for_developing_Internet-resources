function timer(){
    var t = document.getElementById('time').value;
    if(isNaN(t) || (t == 0)) 
        alert ('Введите время выполнения теста!');
    else{
        timeMinut = parseInt(document.getElementById('time').value) * 60;
        document.getElementById('content').innerHTML = '';
        shows = '';
        shows += '<div id="timer_head">Осталось:</div>';
        shows += '<div id="timer"></div>';
        shows += '<div id="question"></div>';
        shows += '<div id="answer"></div>';
        shows += '<div id = "buttons">';
        shows += '<input class="buttons_q" type="button" value="1" onclick="generation_question(1)"><br>';
        shows += '<input class="buttons_q" type="button" value="2" onclick="generation_question(2)"><br>';
        shows += '<input class="buttons_q" type="button" value="3" onclick="generation_question(3)"><br>';
        shows += '<input class="buttons_q" type="button" value="4" onclick="generation_question(4)"><br>';
        shows += '<input class="buttons_q" type="button" value="5" onclick="generation_question(5)"><br>';
        shows += '<input class="buttons_q" type="button" value="6" onclick="generation_question(6)"><br>';
        shows += '</div><br>';
        shows += '<input id="finish" type="button" value="Завершить тестирование" onclick="Finish()">';
        document.getElementById('content').innerHTML = shows;
        let timerShow = document.getElementById('timer');
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
            1000);
    }
}