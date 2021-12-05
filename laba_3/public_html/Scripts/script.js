function counter(){
    if(document.forma.ls.placeholder=='л.с.'){
        document.forma.ls.placeholder='кВт';
        document.forma.kv.placeholder='л.с.';
    }
    else {
        document.forma.ls.placeholder='л.с.';
        document.forma.kv.placeholder='кВт';
    }
}

var length = 0;
var arr = new Array();

function calculate(){
    var k = 0.7355; // Коэффициент перевода л.с. в кВт
    var ls;
    var kv;
    //-----Получение числовых значений и конвертация-----
    if(document.forma.ls.placeholder=='л.с.'){
        //-----Проверка корректности ввода-----
        document.forma.kv.value = k*document.forma.ls.value;
        if (isNaN(document.forma.ls.value)){
            alert('Error!');
        }
        else{
            ls = document.forma.ls.value;
            kv = document.forma.kv.value;
        }
    }
    else {
        //-----Проверка корректности ввода-----
        document.forma.kv.value = document.forma.ls.value/k;
        if (isNaN(document.forma.kv.value)){
            alert('Error!');
        }
        else{
            ls = document.forma.kv.value;
            kv = document.forma.ls.value;
        }
    }


    var arr1 = new Array(2);
    //-----Проверка на совпадения-----
    var flag = true;
    for (var i = 0; i < length; i++){
        if((ls==arr[i][0])||(kv==arr[i][1]))
            flag = false;
    }
    //-----Добавление данных в массив, если их не было раньше-----
    for (var i = 0; i < 2; i++){
        if (flag){
            if (i%2)
                arr1[i] = kv;
            else
                arr1[i] = ls;
        }
    } 
    arr[length] = arr1;
    length++;
    
    //-----Формирование html-таблицы-----
    var table = document.querySelector('#table');
    var tr = document.createElement('tr');
    for (var j = 0; j < 2; j++){
        if (flag){
            var td = document.createElement('td');
            td.innerHTML = arr[length - 1][j];
        }
        tr.appendChild(td);
    }
    table.appendChild(tr);   
}