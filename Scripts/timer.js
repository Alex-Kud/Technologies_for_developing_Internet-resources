function timer(){
    
    timeMinut = parseInt(document.getElementById('time').value) * 60;
    document.getElementById('content').innerHTML = '';
    shows = '';
    shows += '<div id="timer"></div>';
    shows += '<div id="question"></div>';
    shows += '<div id="answer"></div>';
    shows += '<input type="button" value="1" onclick="generation_question(1)">';
    shows += '<input type="button" value="2" onclick="generation_question(2)">';
    shows += '<input type="button" value="3" onclick="generation_question(3)">';
    shows += '<input type="button" value="4" onclick="generation_question(4)">';
    shows += '<input type="button" value="5" onclick="generation_question(5)">';
    shows += '<input type="button" value="6" onclick="generation_question(6)">';
    shows += '<br>';
    shows += '<input type="button" value="Завершить тестирование" onclick="Finish()">';
    document.getElementById('content').innerHTML = shows;
    let timerShow = document.getElementById("timer");
    //document.getElementById('settings').innerHTML = '';
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