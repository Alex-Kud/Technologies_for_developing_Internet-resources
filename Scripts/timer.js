function timer(){
    let timerShow = document.getElementById("timer");
    timeMinut = parseInt(document.getElementById('time').value) * 60;
    document.getElementById('settings').innerHTML = '';
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