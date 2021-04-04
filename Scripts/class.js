class Answers{
    ans1;
    ans2;
    ans3;
    ans4;
    key;
    answer=';;;;';
    type; //radiobutton, checkbox, select, textbox
    
    setAns1(a1){ this.ans1 = a1; }
    setAns2(a2){ this.ans2 = a2; }
    setAns3(a3){ this.ans3 = a3; }
    setAns4(a4){ this.ans4 = a4; }
    setKey(k){ this.key = k; }
    setAnswer(ans){ this.answer = ans; }
    setType(t){ this.type = t; }
    
    getAns1(){ return this.ans1; }
    getAns2(){ return this.ans2; }
    getAns3(){ return this.ans3; }
    getAns4(){ return this.ans4; }
    getKey(){ return this.key; }
    getAnswer(){ return this.answer; }
    getType(){ return this.type; }
}

class Questions{
    number_question;
    text_question;
    flag = 0; // - нейтральный цвет, 1 - красный, 2 - зелёный, 3 - жёлтый
    
    setNumber_question(num){ this.number_question = num; }
    setText_question(text){ this.text_question = text; }
    setFlag(flg){ this.flag = flg; }
    
    getNumber_question(){ return this.number_question; }
    getText_question(){ return this.text_question; }
    getFlag(){ return this.flag; }
}