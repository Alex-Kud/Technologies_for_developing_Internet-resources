var N = 6; // Количество вопросов

function randomInteger() {
  // случайное число от min до (max+1)
  let rand = Math.random() * N;
  return Math.floor(rand);
}

var flag_array = new Array();
var counter = 0;
var flag_number_array = new Array();
var k = 0;
var last_id = -1;
var flag_m = false;
var arr = new Array(N);
var arr1 = new Array(3);
for (var l = 0; l < N; l++)
    arr[l] = arr1;
var f = false;
var flag_show;

function generation_question(number_question){
    var flg = true;
    for (var i = 0; i < N; i++){
        if (flag_number_array[i] == number_question){
            flg = false;
            break;
        }
    }
    // Проверка, впервые ли выбран вопрос. Если да, генерируем его. 
    // Если нет, то просто выводим ранее сгенерированный вопрос.
    if (flg){
        flag_number_array[k] = number_question;
        k++;
        var num;
        var flag = true;
        var find = false;
        // Проверка на повторную генерацию номера вопроса
        while(!find){
            num = randomInteger();
            for (var i = 0; i < N; i++){
                if(flag_array[i] == num)
                    flag = false; 
            }
            if (flag){
                flag_array[counter] = num;
                counter++;
                break;
            }
            flag = true;
        }
        questions_array[num].setNumber_question(number_question);
    }
    
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
            console.log("Генерируем вопрос");
            if (answers_array[i].getType() == 'checkbox') show_checkbox(i);
            if (answers_array[i].getType() == 'radiobutton') show_radiobutton(i);
            if (answers_array[i].getType() == 'select') show_select(i);
            if (answers_array[i].getType() == 'textbox') show_textbox(i);
            last_id = i;
            console.log("i: " + i);
        }
    }
    f = true;
    console.log("-----Конец генерации-----");
}

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
                text_answer += '<br><input id="button_answer" type="button" value="Ответить" onclick="save_answer('+i+')">';
                document.getElementById('answer').innerHTML = text_answer;
                console.log("show вызван по i: " + i + " Причём id = " + id);
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
                text_answer += '<br><input id="button_answer" type="button" value="Ответить" onclick="save_answer('+i+')">';
                document.getElementById('answer').innerHTML = text_answer;
                console.log("show вызван по i: " + i + " Причём id = " + id);
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
                text_answer += '<br><input id="button_answer" type="button" value="Ответить" onclick="save_answer('+i+')">';
                document.getElementById('answer').innerHTML = text_answer;
                console.log("show вызван по i: " + i + " Причём id = " + id);
}
function show_textbox(i){
    var text_answer;
    document.getElementById('answer').innerHTML='';
    text_answer = '<input id="text_ans" type="text" placeholder="Введите ответ с заглавной буквы">';
    text_answer += '<br><input id="button_answer" type="button" value="Ответить" onclick="save_answer('+i+')">';
    document.getElementById('answer').innerHTML = text_answer;
    if (answers_array[i].getAnswer() != ';;;;')
        document.getElementById('text_ans').value = answers_array[i].getAnswer();
    console.log("show вызван по i: " + i + " Причём id = " + id);
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

function save_answer(i){
    if (answers_array[i].getType() == 'checkbox')
        checkbox_answer(i);
    if (answers_array[i].getType() == 'radiobutton')
        radiobutton_answer(i);
    if (answers_array[i].getType() == 'select')
        select_answer(i);
    if (answers_array[i].getType() == 'textbox')
        textbox_answer(i);
}

function Finish(){
    document.getElementById('content').innerHTML = '';
    var res = 0;
    for(var i = 0; i < N; i++)
        if (answers_array[i].getAnswer() == answers_array[i].getKey()) 
            res++;
    var show = '<div><p id="result">Вы набрали ' + res + ' баллов из ' + N + ' ! Вы молодец!</p></div>';
        for (var i = 0; i < N; i++){
            k = flag_array[i];
            if (k === undefined)
                alert('Вы не завершили просмотр всех вопросов! Попытка выполнения теста неудачна!');
            show += '<p id="number_question">Вопрос № ' + (i + 1); 
            if(answers_array[k].getKey() == answers_array[k].getAnswer())
                show += ' +1 балл</p>';
            
            if(answers_array[k].getAnswer() == ';;;;')
               show += ' Ответ не был дан!</p>';
           
            if ((answers_array[k].getType() == 'textbox') && (answers_array[k].getKey() != answers_array[k].getAnswer())){
                if (answers_array[k].getAnswer() == ';;;;')
                    show += '<p style="background-color:red"> Ответ не был дан! </p>';
                else 
                    show += '<p style="background-color:red">' + answers_array[k].getAnswer() + '</p>';
                show += '<p style="background-color:green">' + answers_array[k].getKey() + '</p>';
            }  
            else 
            if (answers_array[k].getType() == 'checkbox'){
                var ans = answers_array[k].getAnswer().split(';');
                var key = answers_array[k].getKey().split(';');
                
                show += '<p';
                if (key[0] == answers_array[k].getAns1())
                    show += ' style="background-color:green"';
                if ((key[0] != ans[0])&&(ans[0]== answers_array[k].getAns1()))
                    show += ' style="background-color:red"';
                show += '>' + answers_array[k].getAns1() + '</p>';

                show += '<p';
                if (key[1] == answers_array[k].getAns2())
                    show += ' style="background-color:green"';
                if ((key[1] != ans[1])&&(ans[1] == answers_array[k].getAns2()))
                    show += ' style="background-color:red"';
                show += '>' + answers_array[k].getAns2() + '</p>';

                show += '<p';
                if (key[2] == answers_array[k].getAns3())
                    show += ' style="background-color:green"';
                if ((key[2] != ans[2])&&(ans[2] == answers_array[k].getAns3()))
                    show += ' style="background-color:red"';
                show += '>' + answers_array[k].getAns3() + '</p>';

                show += '<p';
                if (key[3] == answers_array[k].getAns4())
                    show += ' style="background-color:green"';
                if ((key[3] != ans[3])&&(ans[3] == answers_array[k].getAns4()))
                    show += ' style="background-color:red"';
                show += '>' + answers_array[k].getAns4() + '</p>';       
            }   

            else{
                show += '<p';
		if (answers_array[k].getKey() == answers_array[k].getAns1())
                    show += ' style="background-color:green"';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns1()))
                    show += ' style="background-color:red"';
		show += '>' + answers_array[k].getAns1() + '</p>';
					
		show += '<p';
		if (answers_array[k].getKey() == answers_array[k].getAns2())
                    show += ' style="background-color:green"';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns2()))
                    show += ' style="background-color:red"';
		show += '>' + answers_array[k].getAns2() + '</p>';
					
		show += '<p';
		if (answers_array[k].getKey() == answers_array[k].getAns3())
                    show += ' style="background-color:green"';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns3()))
                    show += ' style="background-color:red"';
		show += '>' + answers_array[k].getAns3() + '</p>';
					
		show += '<p';
		if (answers_array[k].getKey() == answers_array[k].getAns4())
                    show += ' style="background-color:green"';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns4()))
                    show += ' style="background-color:red"';
		show += '>' + answers_array[k].getAns4() + '</p>';        
            } 
        }
        document.getElementById('content').innerHTML = show;
}


































/*function Finish(){
    document.getElementById('content').innerHTML = '';
    document.getElementById('content').innerHTML = '<div><table id="table"></table></div>';
    var res = 0;
    for(var i = 0; i < N; i++)
        if (answers_array[i].getAnswer() == answers_array[i].getKey()) 
            res++;
    var show = '<div><p id="result">Вы набрали ' + res + ' баллов из ' + N + ' ! Вы молодец!</p></div>';

        for (var i = 0; i < N; i++){
            k = flag_array[i];
            if (k === undefined)
                alert('Вы не завершили просмотр всех вопросов! Попытка выполнения теста неудачна!');
            //show += '<p id="number_question">Вопрос № ' + (i + 1); 
            arr[i][0] = '<p id="number_question">Вопрос № ' + (i + 1);
            //if(answers_array[k].getKey() == answers_array[k].getAnswer())
                //show += ' +1 балл</p>';
            
            //if(answers_array[k].getAnswer() == ';;;;')
               //show += ' Ответ не был дан!</p>';
           
            if ((answers_array[k].getType() == 'textbox') && (answers_array[k].getKey() != answers_array[k].getAnswer())){
                //show += '<p style="background-color:green">' + answers_array[k].getKey() + '</p>';  
                arr[i][1] = '<p style="background-color:green">' + answers_array[k].getKey() + '</p>';
                if (answers_array[k].getAnswer() != ';;;;'){
                    if (answers_array[k].getAnswer() == answers_array[k].getKey())
                        arr[i][2] = '<p style="background-color:green">' + answers_array[k].getAnswer() + '</p>';
                    else 
                        arr[i][2] = '<p style="background-color:red">' + answers_array[k].getAnswer() + '</p>';
                }
                else arr[i][2] = '';
            }
            else if (answers_array[k].getType() == 'checkbox'){
                var ans = answers_array[k].getAnswer().split(';');
                var key = answers_array[k].getKey().split(';');
                
                show += '<p';
                if (key[0] == answers_array[k].getAns1())
                    show += ' style="background-color:green"';
                if ((key[0] != ans[0])&&(ans[0]== answers_array[k].getAns1()))
                    show += ' style="background-color:red"';
                show += '>' + answers_array[k].getAns1() + '</p>';

                show += '<p';
                if (key[1] == answers_array[k].getAns2())
                    show += ' style="background-color:green"';
                if ((key[1] != ans[1])&&(ans[1] == answers_array[k].getAns2()))
                    show += ' style="background-color:red"';
                show += '>' + answers_array[k].getAns2() + '</p>';

                show += '<p';
                if (key[2] == answers_array[k].getAns3())
                    show += ' style="background-color:green"';
                if ((key[2] != ans[2])&&(ans[2] == answers_array[k].getAns3()))
                    show += ' style="background-color:red"';
                show += '>' + answers_array[k].getAns3() + '</p>';

                show += '<p';
                if (key[3] == answers_array[k].getAns4())
                    show += ' style="background-color:green"';
                if ((key[3] != ans[3])&&(ans[3] == answers_array[k].getAns4()))
                    show += ' style="background-color:red"';
                show += '>' + answers_array[k].getAns4() + '</p>';       
            }   

            else{
                show += '<p';
		if (answers_array[k].getKey() == answers_array[k].getAns1())
                    show += ' style="background-color:green"';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns1()))
                    show += ' style="background-color:red"';
		show += '>' + answers_array[k].getAns1() + '</p>';
					
		show += '<p';
		if (answers_array[k].getKey() == answers_array[k].getAns2())
                    show += ' style="background-color:green"';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns2()))
                    show += ' style="background-color:red"';
		show += '>' + answers_array[k].getAns2() + '</p>';
					
		show += '<p';
		if (answers_array[k].getKey() == answers_array[k].getAns3())
                    show += ' style="background-color:green"';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns3()))
                    show += ' style="background-color:red"';
		show += '>' + answers_array[k].getAns3() + '</p>';
					
		show += '<p';
		if (answers_array[k].getKey() == answers_array[k].getAns4())
                    show += ' style="background-color:green"';
		if ((answers_array[k].getKey() != answers_array[k].getAnswer())&&(answers_array[k].getAnswer()==answers_array[k].getAns4()))
                    show += ' style="background-color:red"';
		show += '>' + answers_array[k].getAns4() + '</p>';        
            } 
        }
        //document.getElementById('content').innerHTML = show;
        
        
    //-----Формирование html-таблицы-----
    var table = document.querySelector('#table');
    //var table = document.getElementById('table');
    var th = document.createElement('th');
    var tr = document.createElement('tr');
    th.innerHTML = 'N';
    tr.appendChild(th);
    table.appendChild(th);
    th.innerHTML = 'True';
    tr.appendChild(th);
    table.appendChild(th);
    th.innerHTML = 'Your';
    tr.appendChild(th);
    table.appendChild(th);
    
    for (var m = 0; m < 6; m++){
        for (var j = 0; j < 3; j++){
            if (arr[m][j] !== undefined){
                var td = document.createElement('td');
                td.innerHTML = arr[m][j];
                console.log('arr['+m+']['+j+']: '+ arr[m][j]);
            }
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);
}*/