var questions_array = new Array();
var answers_array = new Array();
for (var i = 0; i < 6; i++){
    questions_array[i] = new Questions;
    answers_array[i] = new Answers;
}// Заполнение данных первого вопроса:
// Ответы:
answers_array[0].setAns1('Христианство');
answers_array[0].setAns2('');
answers_array[0].setAns3('');
answers_array[0].setAns4('');
answers_array[0].setKey('Христианство');
answers_array[0].setType('textbox');
// Вопросы:
questions_array[0].setText_question('Какая религия была принята на Руси в 988 году?');
// Заполнение данных второго вопроса:
// Ответы:
answers_array[1].setAns1('«Повести временных лет»');
answers_array[1].setAns2('«Слова о законе и благодати»');
answers_array[1].setAns3('«Русской правды»');
answers_array[1].setAns4('«Поучения детям»');
answers_array[1].setKey('«Поучения детям»');
answers_array[1].setType('radiobutton');
// Вопросы:
questions_array[1].setText_question('Владимир Мономах известен как автор:');
// Заполнение данных третьего вопроса:
// Ответы:
answers_array[2].setAns1('Чингисхан');
answers_array[2].setAns2('Батый');
answers_array[2].setAns3('Джебэ');
answers_array[2].setAns4('Сугедэй');
answers_array[2].setKey('Батый');
answers_array[2].setType('radiobutton');
// Вопросы:
questions_array[2].setText_question('Во главе монголо-татарских войск, вторгшихся на Русь в 1237г. стоял:');
// Заполнение данных четвертого вопроса:
// Ответы:
answers_array[3].setAns1('Невская битва');
answers_array[3].setAns2('Тарутинское сражение');
answers_array[3].setAns3('Ледовое побоище');
answers_array[3].setAns4('Битва на Калке');
answers_array[3].setKey('Невская битва; ;Ледовое побоище; ;');
answers_array[3].setType('checkbox');
// Вопросы:
questions_array[3].setText_question('В каких сражениях принимал участие Александр Невский?');
// Заполнение данных пятого вопроса:
// Ответы:
answers_array[4].setAns1('Ярослав Окаянный');
answers_array[4].setAns2('Владимир Мономах');
answers_array[4].setAns3('Василий Красное Солнышко');
answers_array[4].setAns4('Иван Калита');
answers_array[4].setKey(' ;Владимир Мономах; ;Иван Калита;');
answers_array[4].setType('checkbox');
// Вопросы:
questions_array[4].setText_question('Какие князья правили на Руси?');
// Заполнение данных шестого вопроса:
// Ответы:
answers_array[5].setAns1('Олег');
answers_array[5].setAns2('Рюрик');
answers_array[5].setAns3('Святослав');
answers_array[5].setAns4('Игорь');
answers_array[5].setKey('Олег');
answers_array[5].setType('select');
// Вопросы:
questions_array[5].setText_question('На ворота Царьграда прибил свой щит князь:');