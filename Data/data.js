var questions_array = new Array();
var answers_array = new Array();
for (var i = 0; i < 6; i++){
    questions_array[i] = new Questions;
    answers_array[i] = new Answers;
}// Заполнение данных первого вопроса:
// Ответы:
answers_array[0].setAns1('Ответ 1 На вопрос 1');
answers_array[0].setAns2('Ответ 2 На вопрос 1');
answers_array[0].setAns3('Ответ 3 На вопрос 1');
answers_array[0].setAns4('Ответ 4 На вопрос 1');
answers_array[0].setKey('Ответ 2 На вопрос 1');
answers_array[0].setType('textbox');
// Вопросы:
questions_array[0].setText_question('Текст вопроса 1');
// Заполнение данных второго вопроса:
// Ответы:
answers_array[1].setAns1('Ответ 1 На вопрос 2');
answers_array[1].setAns2('Ответ 2 На вопрос 2');
answers_array[1].setAns3('Ответ 3 На вопрос 2');
answers_array[1].setAns4('Ответ 4 На вопрос 2');
answers_array[1].setKey('Ответ 3 На вопрос 2');
answers_array[1].setType('radiobutton');
// Вопросы:
questions_array[1].setText_question('Текст вопроса 2');
// Заполнение данных третьего вопроса:
// Ответы:
answers_array[2].setAns1('Ответ 1 На вопрос 3');
answers_array[2].setAns2('Ответ 2 На вопрос 3');
answers_array[2].setAns3('Ответ 3 На вопрос 3');
answers_array[2].setAns4('Ответ 4 На вопрос 3');
answers_array[2].setKey('Ответ 1 На вопрос 3');
answers_array[2].setType('radiobutton');
// Вопросы:
questions_array[2].setText_question('Текст вопроса 3');
// Заполнение данных четвертого вопроса:
// Ответы:
answers_array[3].setAns1('Ответ 1 На вопрос 4');
answers_array[3].setAns2('Ответ 2 На вопрос 4');
answers_array[3].setAns3('Ответ 3 На вопрос 4');
answers_array[3].setAns4('Ответ 4 На вопрос 4');
answers_array[3].setKey('Ответ 1 На вопрос 4; ;Ответ 3 На вопрос 4; ;');
answers_array[3].setType('checkbox');
// Вопросы:
questions_array[3].setText_question('Текст вопроса 4');
// Заполнение данных пятого вопроса:
// Ответы:
answers_array[4].setAns1('Ответ 1 На вопрос 5');
answers_array[4].setAns2('Ответ 2 На вопрос 5');
answers_array[4].setAns3('Ответ 3 На вопрос 5');
answers_array[4].setAns4('Ответ 4 На вопрос 5');
answers_array[4].setKey(' ;Ответ 2 На вопрос 5; ;Ответ 4 На вопрос 5;');
answers_array[4].setType('checkbox');
// Вопросы:
questions_array[4].setText_question('Текст вопроса 5');
// Заполнение данных шестого вопроса:
// Ответы:
answers_array[5].setAns1('Ответ 1 На вопрос 6');
answers_array[5].setAns2('Ответ 2 На вопрос 6');
answers_array[5].setAns3('Ответ 3 На вопрос 6');
answers_array[5].setAns4('Ответ 4 На вопрос 6');
answers_array[5].setKey('Ответ 2 На вопрос 6');
answers_array[5].setType('select');
// Вопросы:
questions_array[5].setText_question('Текст вопроса 6');