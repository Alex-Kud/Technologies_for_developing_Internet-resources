$('#start').click(function(){
    $('#info').animate({opacity: "hide"}, "slow");
    //$('#instrucrion').animate({opacity: "hide"}, "slow");
    //$('#start').animate({opacity: "hide"}, "slow");
    //$('#quant').animate({opacity: "hide"}, "slow");
    start();
});
function start(){
    Map.init(document.getElementById('canvas')); // Инициализация Map
    let Quantity = document.forma.quantity.value.toString(); // Первоначальное количество фигур
    let reg = /[0-9]/;
    if (!reg.test(Quantity) || Quantity < 2 || Quantity > 99){
        $('#error').show();
        return;
    }
    let all_figures = [Quantity]; // Массив с фигурами
    for (let i = 0; i < Quantity; i++){
        let figura = []; // Массив с информацие об одной фигуре
        type = getRandom(1,6); // 1 - ромб, 2 - квадрат, 3 - прямоугольник горизонт, 4 - прямоугольник верт, 5 - треугольник
        a = getRandom(10,70);
        x = getRandom(a, document.getElementById('canvas').width - a - 5);
        y = getRandom(a, document.getElementById('canvas').height - a - 5);
        color = getRandomRGBColorString();
        figura[1] = type; // Тип фигуры
        figura[2] = color; // Цвет фигуры
        figura[3] = x;
        figura[4] = y;
        figura[5] = a;
        
        switch (type) {
            case 1: figura[0] = new Rhombus(x, y, a, color); break;
            case 2: figura[0] = new Square(x, y, a, color); break;
            case 3: figura[0] = new Rectangle_horizon(x, y, a, color); break;
            case 4: figura[0] = new Rectangle_vertical(x, y, a, color); break;
            case 5: figura[0] = new Triangle(x, y, a, color);
        }
        all_figures[i] = figura;
    }

    //___Отрисовка графики___
    Map.clear(); // Очистка канваса
    for (let i = 0; i < Quantity; i++){
        Map.show(all_figures[i][0]); // Первичная отрисовка
    }
    
    // Обновление изображения
    let update = function(){
        requestAnimationFrame(update);
        Map.clear();
        for (let i = 0; i < Quantity; i++) Map.update(all_figures[i][0]); 
        
        for (let i = 0; i < Quantity; i++){
            for (let j = i+1; j < Quantity; j++){
                        let f1_p1 = {x: all_figures[i][0].get_coordinates()[0].x, y: all_figures[i][0].get_coordinates()[0].y};
                        let f1_p2 = {x: all_figures[i][0].get_coordinates()[1].x, y: all_figures[i][0].get_coordinates()[1].y};
                        let f1_p3 = {x: all_figures[i][0].get_coordinates()[2].x, y: all_figures[i][0].get_coordinates()[2].y};

                        let f2_p1 = {x: all_figures[j][0].get_coordinates()[0].x, y: all_figures[j][0].get_coordinates()[0].y};
                        let f2_p2 = {x: all_figures[j][0].get_coordinates()[1].x, y: all_figures[j][0].get_coordinates()[1].y};
                        let f2_p3 = {x: all_figures[j][0].get_coordinates()[2].x, y: all_figures[j][0].get_coordinates()[2].y};
                if((all_figures[i][1] === 2)|| (all_figures[i][1] === 3) || (all_figures[i][1] === 4)|| (all_figures[i][1] === 1)){ // Первая фигура - квадрат
                        let f1_p4 = {x: all_figures[i][0].get_coordinates()[3].x, y: all_figures[i][0].get_coordinates()[3].y};
                    if((all_figures[j][1] === 2) || (all_figures[j][1] === 3) || (all_figures[j][1] === 4)|| (all_figures[j][1] === 1)){
                        let f2_p4 = {x: all_figures[j][0].get_coordinates()[3].x, y: all_figures[j][0].get_coordinates()[3].y};
                        // Первая линия первой фигуры со всеми линиями второй фигуры
                        if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "верх1");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "верх2");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p3.x, f2_p3.y, f2_p4.x, f2_p4.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "верх3");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p4.x, f2_p4.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "верх4");
                        // Вторая линия первой фигуры
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "право1");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "право2");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p3.x, f2_p3.y, f2_p4.x, f2_p4.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "право3");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p4.x, f2_p4.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "право4");
                        // Третья линия первой фигуры
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p4.x, f1_p4.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "низ1");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p4.x, f1_p4.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "низ2");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p4.x, f1_p4.y, f2_p3.x, f2_p3.y, f2_p4.x, f2_p4.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "низ3");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p4.x, f1_p4.y, f2_p4.x, f2_p4.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "низ4");
                        // Четвёртая линия первой фигуры
                        else if(CrossingCheck(f1_p4.x, f1_p4.y, f1_p1.x, f1_p1.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "лево1");
                        else if(CrossingCheck(f1_p4.x, f1_p4.y, f1_p1.x, f1_p1.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j);//console.log("Столкнулись фигуры с индексами: " + i + " " + j + "лево2");
                        else if(CrossingCheck(f1_p4.x, f1_p4.y, f1_p1.x, f1_p1.y, f2_p3.x, f2_p3.y, f2_p4.x, f2_p4.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "лево3");
                        else if(CrossingCheck(f1_p4.x, f1_p4.y, f1_p1.x, f1_p1.y, f2_p4.x, f2_p4.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Столкнулись фигуры с индексами: " + i + " " + j + "лево4");
                    }
                    else if(all_figures[j][1] === 5){       
                        // Первая линия первой фигуры со всеми линиями второй фигуры
                        if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "верх1");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "верх2");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p3.x, f2_p3.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "верх3");
                        // Вторая линия первой фигуры
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "право1");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "право2");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p3.x, f2_p3.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "право3");
                        // Третья линия первой фигуры
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p4.x, f1_p4.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "низ1");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p4.x, f1_p4.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "низ2");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p4.x, f1_p4.y, f2_p3.x, f2_p3.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "низ3");
                        // Четвёртая линия первой фигуры
                        else if(CrossingCheck(f1_p4.x, f1_p4.y, f1_p1.x, f1_p1.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "лево1");
                        else if(CrossingCheck(f1_p4.x, f1_p4.y, f1_p1.x, f1_p1.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "лево2");
                        else if(CrossingCheck(f1_p4.x, f1_p4.y, f1_p1.x, f1_p1.y, f2_p3.x, f2_p3.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т1Столкнулись фигуры с индексами: " + i + " " + j + "лево3");
                    }
                }
                else if((all_figures[i][1] === 5)&&((all_figures[j][1] === 2) || (all_figures[j][1] === 3) || (all_figures[j][1] === 4)|| (all_figures[j][1] === 1))){
                        let f2_p4 = {x: all_figures[j][0].get_coordinates()[3].x, y: all_figures[j][0].get_coordinates()[3].y};
                        // Первая линия первой фигуры со всеми линиями второй фигуры
                        if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "верх1");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "верх2");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p3.x, f2_p3.y, f2_p4.x, f2_p4.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "верх3");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p4.x, f2_p4.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "верх4");
                        // Вторая линия первой фигуры
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "право1");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "право2");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p3.x, f2_p3.y, f2_p4.x, f2_p4.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "право3");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p4.x, f2_p4.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "право4");
                        // Третья линия первой фигуры
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p1.x, f1_p1.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "низ1");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p1.x, f1_p1.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "низ2");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p1.x, f1_p1.y, f2_p3.x, f2_p3.y, f2_p4.x, f2_p4.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "низ3");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p1.x, f1_p1.y, f2_p4.x, f2_p4.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "низ4");
                }
                else if((all_figures[i][1] === 5)&&(all_figures[j][1] === 5)){
                        // Первая линия первой фигуры со всеми линиями второй фигуры
                        if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "верх1");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "верх2");
                        else if(CrossingCheck(f1_p1.x, f1_p1.y, f1_p2.x, f1_p2.y, f2_p3.x, f2_p3.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "верх3");
                        // Вторая линия первой фигуры
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "право1");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "право2");
                        else if(CrossingCheck(f1_p2.x, f1_p2.y, f1_p3.x, f1_p3.y, f2_p3.x, f2_p3.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "право3");
                        // Третья линия первой фигуры
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p1.x, f1_p1.y, f2_p1.x, f2_p1.y, f2_p2.x, f2_p2.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "низ1");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p1.x, f1_p1.y, f2_p2.x, f2_p2.y, f2_p3.x, f2_p3.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "низ2");
                        else if(CrossingCheck(f1_p3.x, f1_p3.y, f1_p1.x, f1_p1.y, f2_p3.x, f2_p3.y, f2_p1.x, f2_p1.y)) collision(all_figures[i],i,all_figures[j],j); //console.log("Т2Столкнулись фигуры с индексами: " + i + " " + j + "низ3");
                }
            }
        }
        document.forma.out.value = all_figures.length;
        if(all_figures.length < 2) location.reload();
        
    };
    
    
    function collision(fig1=[5], i, fig2=[5], j){
        let figura = []; // Массив с информацие об одной фигуре

        all_figures = all_figures.filter(function(elem, ind, arr){
            if (ind !== j){
                return true;
            }
        });
        a1 = fig1[5];
        a2 = fig2[5];
        if (a2 > a1){
            temp = a2;
            a2 = a1;
            a1 = temp;
        }
        a = getRandom(a2, a1);
        x = (fig1[0].get_coordinates()[4].x+fig2[0].get_coordinates()[4].x)/2;
        y = (fig1[0].get_coordinates()[4].y+fig2[0].get_coordinates()[4].y)/2;
        color = getRandomRGBColorString();
        figura[1] = type; // Тип фигуры
        figura[2] = color; // Цвет фигуры
        figura[3] = x;
        figura[4] = y;
        figura[5] = a;
        
        type = getRandom(1,6); // 1 - ромб, 2 - квадрат, 3 - прямоугольник горизонт, 4 - прямоугольник верт, 5 - треугольник
        switch (type) {
            case 1: figura[0] = new Rhombus(x, y, a, color); break;
            case 2: figura[0] = new Square(x, y, a, color); break;
            case 3: figura[0] = new Rectangle_horizon(x, y, a, color); break;
            case 4: figura[0] = new Rectangle_vertical(x, y, a, color); break;
            case 5: figura[0] = new Triangle(x, y, a, color);
        }
        all_figures[i] = figura;
        Quantity--;
    }

    update();
};


function vec(ax,ay,bx,by){// Векторное произведение
    return ax*by-bx*ay;
}
 
function CrossingCheck(x1,y1,x2,y2,x3,y3,x4,y4){ // Проверка пересечения
	let v1,v2,v3,v4;
	v1=vec(x4 - x3, y4 - y3, x1 - x3, y1 - y3);
	v2=vec(x4 - x3, y4 - y3, x2 - x3, y2 - y3);
	v3=vec(x2 - x1, y2 - y1, x3 - x1, y3 - y1);
	v4=vec(x2 - x1, y2 - y1, x4 - x1, y3 - y1);
	if(v1*v2<0 && v3*v4<0) return true; // Если пересекаются
	else return false; // Если не пересекаются
}
