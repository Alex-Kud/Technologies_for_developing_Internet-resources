var N = 6; // Количество вопросов

function randomInteger() {
  // случайное число от min до (max+1)
  let rand = Math.random() * N;
  return Math.floor(rand);
}

var flag_array = new Array();
var j = 0;
var flag_number_array = new Array();
var k = 0;
var id = -1;
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
                flag_array[j] = num;
                j++;
                break;
            }
            flag = true;
        }
        questions_array[num].setNumber_question(number_question);
    }

    for (var i = 0; i < N; i++){
        if (questions_array[i].getNumber_question() == number_question){
            id = i;
            document.getElementById('question').innerHTML='';
            var question = '<p>'+questions_array[i].getText_question()+'</p>';
            document.getElementById('question').innerHTML=question;
            var text_answer;
            if (answers_array[i].getType() == 'checkbox'){
                document.getElementById('answer').innerHTML='';
                text_answer = '<input id="checkbox1" type="checkbox" value="a1">';
                text_answer += answers_array[i].getAns1();
                text_answer += '<br><input id="checkbox2" type="checkbox" value="a2">';
                text_answer += answers_array[i].getAns2();
                text_answer += '<br><input id="checkbox3" type="checkbox" value="a3">';
                text_answer += answers_array[i].getAns3();
                text_answer += '<br><input id="checkbox4" type="checkbox" value="a4">';
                text_answer += answers_array[i].getAns4();
                text_answer += '<br><input id="button_answer" type="button" value="Ответить" onclick="checkbox_answer()">';
                document.getElementById('answer').innerHTML = text_answer;
            }
            if (answers_array[i].getType() == 'radiobutton'){
                document.getElementById('answer').innerHTML='';
                text_answer = '<input id="radiobutton1" name="rb" type="radio" value="a1">';
                text_answer += answers_array[i].getAns1();
                text_answer += '<br><input id="radiobutton2" name="rb" type="radio" value="a2">';
                text_answer += answers_array[i].getAns2();
                text_answer += '<br><input id="radiobutton3" name="rb" type="radio" value="a3">';
                text_answer += answers_array[i].getAns3();
                text_answer += '<br><input id="radiobutton4" name="rb" type="radio" value="a4">';
                text_answer += answers_array[i].getAns4();
                text_answer += '<br><input id="button_answer" type="button" value="Ответить" onclick="radiobutton_answer()">';
                document.getElementById('answer').innerHTML = text_answer;
            }
            if (answers_array[i].getType() == 'select'){
                document.getElementById('answer').innerHTML='';
                text_answer = '<select id="selects">';
                text_answer += '<option id="select1" value="a1">';
                text_answer += answers_array[i].getAns1();
                text_answer += '</option>';
                text_answer += '<option id="select2" value="a2">';
                text_answer += answers_array[i].getAns2();
                text_answer += '</option>';
                text_answer += '<option id="select3" value="a3">';
                text_answer += answers_array[i].getAns3();
                text_answer += '</option>';
                text_answer += '<option id="select4" value="a4">';
                text_answer += answers_array[i].getAns4();
                text_answer += '</option></select>';
                text_answer += '<br><input id="button_answer" type="button" value="Ответить" onclick="select_answer()">';
                document.getElementById('answer').innerHTML = text_answer;
            }        
            if (answers_array[i].getType() == 'textbox'){
                document.getElementById('answer').innerHTML='';
                text_answer = '<input id="text_ans" type="text" placeholder="Введите ответ">';
                text_answer += '<br><input id="button_answer" type="button" value="Ответить" onclick="textbox_answer()">';
                document.getElementById('answer').innerHTML = text_answer;
            }    
        }
    }
}

function checkbox_answer(){
    var ans='';
    answers_array[id].setAnswer('');
    if (document.getElementById('checkbox1').checked) {
        ans += answers_array[id].getAns1();
        ans += ';';
    }
    else ans += ' ;';
    if (document.getElementById('checkbox2').checked) {
        ans += answers_array[id].getAns2();
        ans += ';';
    }
    else ans += ' ;';
    if (document.getElementById('checkbox3').checked) {
        ans += answers_array[id].getAns3();
        ans += ';';
    }
    else ans += ' ;';
    if (document.getElementById('checkbox4').checked) {
        ans += answers_array[id].getAns4();
        ans += ';';
    }
    else ans += ' ;';
    answers_array[id].setAnswer(ans);
    console.log(ans);
    document.getElementById('answer').innerHTML+='<p style="color: green">Ответ записан!</p>';
}
function radiobutton_answer(){
    var ans='';
    answers_array[id].setAnswer('');
    if (document.getElementById('radiobutton1').checked) ans = answers_array[id].getAns1();
    if (document.getElementById('radiobutton2').checked) ans = answers_array[id].getAns2();
    if (document.getElementById('radiobutton3').checked) ans = answers_array[id].getAns3();
    if (document.getElementById('radiobutton4').checked) ans = answers_array[id].getAns4();
    answers_array[id].setAnswer(ans);
    document.getElementById('answer').innerHTML+='<p style="color: green">Ответ записан!</p>';
}
function select_answer(){
    var ans='';
    answers_array[id].setAnswer('');
    if (document.getElementById('select1').selected) ans = answers_array[id].getAns1();
    if (document.getElementById('select2').selected) ans = answers_array[id].getAns2();
    if (document.getElementById('select3').selected) ans = answers_array[id].getAns3();
    if (document.getElementById('select4').selected) ans = answers_array[id].getAns4();
    answers_array[id].setAnswer(ans);
    document.getElementById('answer').innerHTML+='<p style="color: green">Ответ записан!</p>';
}
function textbox_answer(){
    var ans=document.getElementById('text_ans').value;
    answers_array[id].setAnswer('');
    answers_array[id].setAnswer(ans);
    document.getElementById('answer').innerHTML+='<p style="color: green">Ответ записан!</p>';
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

