var N = 6; // Количество вопросов

var counter = 0;
var k = 0;
var last_id = -1;
var flag_m = false;
var f = false;
var flag_show;
// Массив для сопоставления id вопроса и номера кнопки
// 1 столбец - id вопроса
// 2 столбец - номер кнопки, на которой он сгенерировался (=number question)
var flag_array = new Array(N);
for (var l = 0; l < N; l++)
    flag_array[l] = new Array(2);
// Массив для формирования таблицы ответов
var array = new Array(N);
for (var l = 0; l < N; l++)
    array[l] = new Array(3);

// Генерация порядка вопросов
function generation_question(){
    for (var number_question = 1; number_question <= N; number_question++){
        var flg = true;
        for (var i = 0; i < N; i++){
            if (flag_array[i][1] == number_question){
                flg = false;
                break;
            }
        }
        // Проверка, впервые ли выбран вопрос. Если да, генерируем его. 
        // Если нет, то просто выводим ранее сгенерированный вопрос.
        if (flg){
            flag_array[k][1] = number_question;
            k++;
            var num;
            var flag = true;
            var find = false;
            // Проверка на повторную генерацию номера вопроса
            while(!find){
                num = Math.floor(Math.random() * N);
                for (var i = 0; i < N; i++){
                    if(flag_array[i][0] == num)
                        flag = false; 
                }
                if (flag){
                    flag_array[counter][0] = num;
                    counter++;
                    break;
                }
                flag = true;
            }
            questions_array[num].setNumber_question(number_question);
        }
    }
}
// Показ вопросов
function show_question(number_question){
    if (f) {
        flag_show = false;
        save_answer(last_id);
    }  
    for (var i = 0; i < N; i++){
        if (questions_array[i].getNumber_question() == number_question){
            flag_show = true;
            document.getElementById('question').innerHTML='';
            var question = questions_array[i].getText_question();
            document.getElementById('question').innerHTML=question;
            if (answers_array[i].getType() == 'checkbox') show_checkbox(i);
            if (answers_array[i].getType() == 'radiobutton') show_radiobutton(i);
            if (answers_array[i].getType() == 'select') show_select(i);
            if (answers_array[i].getType() == 'textbox') show_textbox(i);
            last_id = i;
            questions_array[i].setFlag(3);
            show_button();
        }
    }
    f = true;
}
// Показ кнопок (с изменением цвета)
function show_button(){
    show_b = '';
    for (var i = 0; i < N; ++i){
        var n;
        for (var j = 0; j < N; ++j)
            if (flag_array[j][1] == (i+1))
                n = flag_array[j][0]
        //Вызвать кнопку под индексом из второго столбца для соответствующей i из первого столбца
        if(questions_array[n].getFlag() == 1) 
            show_b += '<input class="buttons_q" style="background-color:red"\n\
        type="button" value="'+(i+1)+'" onclick="show_question('+(i+1)+')"><br>';
        else if(questions_array[n].getFlag() == 2)
            show_b += '<input class="buttons_q" style="background-color:green"\n\
        type="button" value="'+(i+1)+'" onclick="show_question('+(i+1)+')"><br>';
        else if(questions_array[n].getFlag() == 3)
            show_b += '<input class="buttons_q" style="background-color:yellow"\n\
        type="button" value="'+(i+1)+'" onclick="show_question('+(i+1)+')"><br>';
        else
            show_b += '<input class="buttons_q" type="button" value="'+(i+1)+'"\n\
                      onclick="show_question('+(i+1)+')"><br>';
    }
    document.getElementById('buttons').innerHTML = show_b;
    
}
// Показ вариантов ответа
function show_checkbox(i){
    var text_answer;
    var ans = answers_array[i].getAnswer().split(';');
    document.getElementById('answer').innerHTML='';
    text_answer = '<input id="checkbox1" type="checkbox" value="a1"';
    if (ans[0] == answers_array[i].getAns1())
        text_answer += ' checked>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns1();
    text_answer += '<br><input id="checkbox2" type="checkbox" value="a2"';
    if (ans[1] == answers_array[i].getAns2())
        text_answer += ' checked>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns2();
    text_answer += '<br><input id="checkbox3" type="checkbox" value="a3"';
    if (ans[2] == answers_array[i].getAns3())
        text_answer += ' checked>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns3();
    text_answer += '<br><input id="checkbox4" type="checkbox" value="a4"';
    if (ans[3] == answers_array[i].getAns4())
        text_answer += ' checked>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns4();
    text_answer += '<br><input id="button_answer" type="button" value="Ответить"\n\
                    onclick="save_answer('+i+')">';
    document.getElementById('answer').innerHTML = text_answer;
}
function show_radiobutton(i){
    var text_answer;
    document.getElementById('answer').innerHTML='';
    text_answer = '<input id="radiobutton1" name="rb" type="radio" value="a1"';
    if (answers_array[i].getAnswer() == answers_array[i].getAns1())
        text_answer += ' checked>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns1();
    text_answer += '<br><input id="radiobutton2" name="rb" type="radio" value="a2"';
    if (answers_array[i].getAnswer() == answers_array[i].getAns2())
        text_answer += ' checked>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns2();
    text_answer += '<br><input id="radiobutton3" name="rb" type="radio" value="a3"';
    if (answers_array[i].getAnswer() == answers_array[i].getAns3())
        text_answer += ' checked>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns3();
    text_answer += '<br><input id="radiobutton4" name="rb" type="radio" value="a4"';
    if (answers_array[i].getAnswer() == answers_array[i].getAns4())
        text_answer += ' checked>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns4();
    text_answer += '<br><input id="button_answer" type="button" value="Ответить"\n\
                onclick="save_answer('+i+')">';
    document.getElementById('answer').innerHTML = text_answer;
}
function show_select(i){
    var text_answer;
    document.getElementById('answer').innerHTML='';
    text_answer = '<select id="selects">';
    text_answer += '<option id="select1" value="a1"';
    if (answers_array[i].getAnswer() == answers_array[i].getAns1())
        text_answer += ' selected>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns1();
    text_answer += '</option>';
    text_answer += '<option id="select2" value="a2"';
    if (answers_array[i].getAnswer() == answers_array[i].getAns2())
        text_answer += ' selected>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns2();
    text_answer += '</option>';
    text_answer += '<option id="select3" value="a3"';
    if (answers_array[i].getAnswer() == answers_array[i].getAns3())
        text_answer += ' selected>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns3();
    text_answer += '</option>';
    text_answer += '<option id="select4" value="a4"';
    if (answers_array[i].getAnswer() == answers_array[i].getAns4())
        text_answer += ' selected>';
    else text_answer += '>';
    text_answer += answers_array[i].getAns4();
    text_answer += '</option></select>';
    text_answer += '<br><input id="button_answer" type="button" value="Ответить"\n\
                    onclick="save_answer('+i+')">';
    document.getElementById('answer').innerHTML = text_answer;
}
function show_textbox(i){
    var text_answer;
    document.getElementById('answer').innerHTML='';
    text_answer = '<input id="text_ans" type="text" placeholder="Введите ответ с заглавной буквы">';
    text_answer += '<br><input id="button_answer" type="button" value="Ответить"\n\
                    onclick="save_answer('+i+')">';
    document.getElementById('answer').innerHTML = text_answer;
    if (answers_array[i].getAnswer() != ';;;;')
        document.getElementById('text_ans').value = answers_array[i].getAnswer();
}
// Проверки того, были ли даны ответы ранее
function check_for_button(i){
    if ((answers_array[i].getAnswer() != '')&&(answers_array[i].getAnswer() != ';;;;')&&(answers_array[i].getAnswer() != ' ; ; ; ;'))
        return 2;
    return 1;
}
// Сохранение ответов
function save_answer(i){
    if (answers_array[i].getType() == 'checkbox')
        checkbox_answer(i);
    if (answers_array[i].getType() == 'radiobutton')
        radiobutton_answer(i);
    if (answers_array[i].getType() == 'select')
        select_answer(i);
    if (answers_array[i].getType() == 'textbox')
        textbox_answer(i);
    questions_array[i].setFlag(check_for_button(i));
}
function checkbox_answer(i){
    flag_m = true;
    var ans='';
    answers_array[i].setAnswer('');
    if (document.getElementById('checkbox1').checked) {
        ans += answers_array[i].getAns1();
        ans += ';';
    }
    else ans += ' ;';
    if (document.getElementById('checkbox2').checked) {
        ans += answers_array[i].getAns2();
        ans += ';';
    }
    else ans += ' ;';
    if (document.getElementById('checkbox3').checked) {
        ans += answers_array[i].getAns3();
        ans += ';';
    }
    else ans += ' ;';
    if (document.getElementById('checkbox4').checked) {
        ans += answers_array[i].getAns4();
        ans += ';';
    }
    else ans += ' ;';
    answers_array[i].setAnswer(ans);
    show_checkbox(i);
    document.getElementById('answer').innerHTML+='<p style="color: green">Ответ записан!</p>';
    if (flag_show) 
        setTimeout(show_checkbox, 500, i);
}
function radiobutton_answer(i){
    flag_m = true;
    var ans='';
    answers_array[i].setAnswer('');
    if (document.getElementById('radiobutton1').checked) ans = answers_array[i].getAns1();
    if (document.getElementById('radiobutton2').checked) ans = answers_array[i].getAns2();
    if (document.getElementById('radiobutton3').checked) ans = answers_array[i].getAns3();
    if (document.getElementById('radiobutton4').checked) ans = answers_array[i].getAns4();
    answers_array[i].setAnswer(ans);
    show_radiobutton(i);
    document.getElementById('answer').innerHTML+='<p style="color: green">Ответ записан!</p>';
    if (flag_show)
        setTimeout(show_radiobutton, 500, i);
}
function select_answer(i){
    flag_m = true;
    var ans='';
    answers_array[i].setAnswer('');
    if (document.getElementById('select1').selected) ans = answers_array[i].getAns1();
    if (document.getElementById('select2').selected) ans = answers_array[i].getAns2();
    if (document.getElementById('select3').selected) ans = answers_array[i].getAns3();
    if (document.getElementById('select4').selected) ans = answers_array[i].getAns4();
    answers_array[i].setAnswer(ans);
    show_select(i);
    document.getElementById('answer').innerHTML+='<p style="color: green">Ответ записан!</p>';
    if (flag_show)
        setTimeout(show_select, 500, i);
}
function textbox_answer(i){
    flag_m = true;
    var ans = document.getElementById('text_ans').value;
    answers_array[i].setAnswer('');
    answers_array[i].setAnswer(ans);
    show_textbox(i);
    document.getElementById('answer').innerHTML+='<p style="color: green">Ответ записан!</p>';
    if (flag_show)
        setTimeout(show_textbox, 500, i);
}
// Формирование и вывод таблицы с результатами
function OutputTable(table){
    for(var i = 0; i < N; i++){
        var tr = document.createElement('tr');
        for(var j = 0; j < 3; j++){
            array[i][0] = i + 1;
            var td = document.createElement('td');
            td.innerHTML = array[i][j];
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
}
function Finish(){
    timeMinut = 0;
    document.getElementById('content').innerHTML = '';
    // Подсчёт суммы баллов
    var res = 0;
    for(var i = 0; i < N; i++)
        if (answers_array[i].getAnswer() == answers_array[i].getKey()) 
            res++;
    // Формирование таблицы с результатами
    document.getElementById('content').innerHTML = '<table id="table"\n\
    border="1" width="100%" cellpadding="5" align="center"><tr id="tr">\n\
    <th>Номер вопроса</th><th>Ваш ответ</th><th>Верный ответ</th></tr></table>';
    var table = document.querySelector('#table');
    document.getElementById('result').innerHTML = 'Вы набрали ' + res + ' баллов из ' + N + ' ! Вы молодец!';
        for (var i = 0; i < N; i++){
            k = flag_array[i][0];
            if (k === undefined)
                alert('Вы не завершили просмотр всех вопросов! Попытка выполнения теста неудачна!');
            if ((answers_array[k].getType() == 'textbox') && (answers_array[k].getKey() != answers_array[k].getAnswer())){
                array[i][2] = '<p style="background-color:green">' + answers_array[k].getKey() + '</p>';
                array[i][0] = '<p style="background-color:green">' + answers_array[k].getKey() + '</p>';
                if (answers_array[k].getAnswer() != ';;;;'){
                    if (answers_array[k].getAnswer() == answers_array[k].getKey())
                        array[i][1] = '<p style="background-color:green">' + answers_array[k].getAnswer() + '</p>';
                    else 
                        array[i][1] = '<p style="background-color:red">' + answers_array[k].getAnswer() + '</p>';
                }
                else array[i][1] = '';
            }
            else if (answers_array[k].getType() == 'checkbox'){
                array[i][1] = '';
                array[i][2] = '';
                var ans = answers_array[k].getAnswer().split(';');
                var key = answers_array[k].getKey().split(';');
                for (var p = 0; p < 4; p++)
                    array[i][2] += '<p style="background-color:green">' + key[p] + '</p>';
                if ((key[0] == ans[0])&&(ans[0] != ' '))
                    array[i][1] += '<p style="background-color:green">';
                if ((key[0] != ans[0])&&(ans[0]== answers_array[k].getAns1()))
                    array[i][1] += '<p style="background-color:red">';
                array[i][1] += answers_array[k].getAns1() + '</p>';
                
                if ((key[1] == ans[1])&&(ans[1] != ' '))
                    array[i][1] += '<p style="background-color:green">';
                if ((key[1] != ans[1])&&(ans[1] == answers_array[k].getAns2()))
                    array[i][1] += '<p style="background-color:red">';
                array[i][1] += answers_array[k].getAns2() + '</p>';
                
                if ((key[2] == ans[2])&&(ans[2] != ' '))
                    array[i][1] += '<p style="background-color:green">';
                if ((key[2] != ans[2])&&(ans[2] == answers_array[k].getAns3()))
                    array[i][1] += '<p style="background-color:red">';
                array[i][1] += answers_array[k].getAns3() + '</p>';

                if ((key[3] == ans[3])&&(ans[3] != ' '))
                    array[i][1] += '<p style="background-color:green">';
                if ((key[3] != ans[3])&&(ans[3] == answers_array[k].getAns4()))
                    array[i][1] += '<p style="background-color:red">';
                array[i][1] += answers_array[k].getAns4() + '</p>';
            }   
            else{
                array[i][1] = '';
                array[i][2] = '<p style="background-color:green">' + answers_array[k].getKey() + '</p>'
		if ((answers_array[k].getKey() == answers_array[k].getAns1()) && (answers_array[k].getAnswer()==answers_array[k].getAns1()))
                    array[i][1] = '<p style="background-color:green">';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns1()))
                    array[i][1] = '<p style="background-color:red">';
		array[i][1] += answers_array[k].getAns1() + '</p>';
				
		if ((answers_array[k].getKey() == answers_array[k].getAns2()) && (answers_array[k].getAnswer()==answers_array[k].getAns2()))
                    array[i][1] += '<p style="background-color:green">';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns2()))
                    array[i][1] += '<p style="background-color:red">';
		array[i][1] += answers_array[k].getAns2() + '</p>';
					
		if ((answers_array[k].getKey() == answers_array[k].getAns3()) && (answers_array[k].getAnswer()==answers_array[k].getAns3()))
                    array[i][1] += '<p style="background-color:green">';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns3()))
                    array[i][1] += '<p style="background-color:red">';
		array[i][1] += answers_array[k].getAns3() + '</p>';
		
		if ((answers_array[k].getKey() == answers_array[k].getAns4()) && (answers_array[k].getAnswer()==answers_array[k].getAns4()))
                    array[i][1] += '<p style="background-color:green">';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns4()))
                    array[i][1] += '<p style="background-color:red">';
		array[i][1] += answers_array[k].getAns4() + '</p>';        
            } 
                if ((answers_array[k].getAnswer() == ' ; ; ; ;')||(answers_array[k].getAnswer() == '')||(answers_array[k].getAnswer() == ';;;;'))
                    array[i][1] = '<p style="background-color:red">Ответ не был дан!</p>';
        }
        OutputTable(table);
}