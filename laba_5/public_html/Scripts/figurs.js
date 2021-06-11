max_speed = 5;
class Square{
        constructor(x, y, a, color){ // Координаты центра, длина стороны, цвет
            this.x = x;
            this.y = y;
            this.a = a;
            this.color = color;
            this.speed = getRandom(1, max_speed);

            this.dx = 1*this.speed;
            this.dy = 1*this.speed;
        }
        draw(ctx){
            ctx.beginPath();
            ctx.moveTo(this.x-this.a/2, this.y-this.a/2);
            ctx.lineTo(this.x+this.a/2, this.y-this.a/2); 
            ctx.lineTo(this.x+this.a/2, this.y+this.a/2);
            ctx.lineTo(this.x-this.a/2, this.y+this.a/2);
            ctx.strokeStyle = this.color;
            ctx.closePath();
            ctx.stroke();
        }    

        update(ctx, canv){
            this.draw(ctx);

            if((this.x+this.a/2) > canv.width)
                this.dx = -this.dx;
            if((this.x-this.a/2) < 0)
                this.dx = -this.dx;
            if((this.y+this.a/2) > canv.height)
                this.dy = -this.dy;
            if((this.y-this.a/2) < 0)
                this.dy = -this.dy;

            this.x += this.dx;
            this.y += this.dy;
        }     
        
        get_coordinates(){
            let point1 = {x: this.x-this.a/2, y: this.y-this.a/2};
            let point2 = {x: this.x+this.a/2, y: this.y-this.a/2};
            let point3 = {x: this.x+this.a/2, y: this.y+this.a/2};
            let point4 = {x: this.x-this.a/2, y: this.y+this.a/2};
            let point5 = {x: this.x, y: this.y};
            let arr = [point1, point2, point3, point4, point5];
            return arr;
        }
}

class Rectangle_vertical{
        constructor(x, y, a, color){ // Координаты центра, длина стороны, цвет
            this.x = x;
            this.y = y;
            this.a = a;
            this.color = color;
            this.speed = getRandom(1, max_speed);

            this.dx = 1*this.speed;
            this.dy = 1*this.speed;
        }
        draw(ctx){
            ctx.beginPath();
            ctx.moveTo(this.x-this.a, this.y-this.a/2);
            ctx.lineTo(this.x+this.a, this.y-this.a/2); 
            ctx.lineTo(this.x+this.a, this.y+this.a/2);
            ctx.lineTo(this.x-this.a, this.y+this.a/2);
            ctx.strokeStyle = this.color;
            ctx.closePath();
            ctx.stroke();
        }    

        update(ctx, canv){
            this.draw(ctx);

            if((this.x+this.a) > canv.width)
                this.dx = -this.dx;
            if((this.x-this.a) < 0)
                this.dx = -this.dx;
            if((this.y+this.a/2) > canv.height)
                this.dy = -this.dy;
            if((this.y-this.a/2) < 0)
                this.dy = -this.dy;

            this.x += this.dx;
            this.y += this.dy;
        }     
        
        get_coordinates(){
            let point1 = {x: this.x-this.a, y: this.y-this.a/2};
            let point2 = {x: this.x+this.a, y: this.y-this.a/2};
            let point3 = {x: this.x+this.a, y: this.y+this.a/2};
            let point4 = {x: this.x-this.a, y: this.y+this.a/2};
            let point5 = {x: this.x, y: this.y};
            let arr = [point1, point2, point3, point4, point5];
            return arr;
        }
}

class Rectangle_horizon{
        constructor(x, y, a, color){ // Координаты центра, длина стороны, цвет
            this.x = x;
            this.y = y;
            this.a = a;
            this.color = color;
            this.speed = getRandom(1, max_speed);

            this.dx = 1*this.speed;
            this.dy = 1*this.speed;
        }
        draw(ctx){
            ctx.beginPath();
            ctx.moveTo(this.x-this.a/2, this.y-this.a);
            ctx.lineTo(this.x+this.a/2, this.y-this.a); 
            ctx.lineTo(this.x+this.a/2, this.y+this.a);
            ctx.lineTo(this.x-this.a/2, this.y+this.a);
            ctx.strokeStyle = this.color;
            ctx.closePath();
            ctx.stroke();
        }    

        update(ctx, canv){
            this.draw(ctx);

            if((this.x+this.a/2) > canv.width)
                this.dx = -this.dx;
            if((this.x-this.a/2) < 0)
                this.dx = -this.dx;
            if((this.y+this.a) > canv.height)
                this.dy = -this.dy;
            if((this.y-this.a) < 0)
                this.dy = -this.dy;

            this.x += this.dx;
            this.y += this.dy;
        }     
        
        get_coordinates(){
            let point1 = {x: this.x-this.a/2, y: this.y-this.a};
            let point2 = {x: this.x+this.a/2, y: this.y-this.a};
            let point3 = {x: this.x+this.a/2, y: this.y+this.a};
            let point4 = {x: this.x-this.a/2, y: this.y+this.a};
            let point5 = {x: this.x, y: this.y};
            let arr = [point1, point2, point3, point4, point5];
            return arr;
        }
}

class Triangle{
        constructor(x, y, a, color){ // Координаты условного центра, расстояние до вершин, цвет
            this.x = x;
            this.y = y;
            this.a = a;
            this.color = color;
            this.speed = getRandom(1, max_speed);

            this.dx = 1*this.speed;
            this.dy = 1*this.speed;
        }
        draw(ctx){
            ctx.beginPath();          
            ctx.moveTo(this.x, this.y+this.a);
            ctx.lineTo(this.x+this.a, this.y+this.a); 
            ctx.lineTo(this.x-this.a, this.y-this.a);
            ctx.strokeStyle = this.color;
            ctx.closePath();
            ctx.stroke();
        }    

        update(ctx, canv){
            this.draw(ctx);

            if((this.x+this.a) > canv.width)
                this.dx = -this.dx;
            if((this.x-this.a) < 0)
                this.dx = -this.dx;
            if((this.y+this.a) > canv.height)
                this.dy = -this.dy;
            if((this.y-this.a) < 0)
                this.dy = -this.dy;

            this.x += this.dx;
            this.y += this.dy;
        }     
        
        get_coordinates(){
            let point1 = {x: this.x, y: this.y+this.a};
            let point2 = {x: this.x+this.a, y: this.y+this.a};
            let point3 = {x: this.x-this.a, y: this.y-this.a};
            let point5 = {x: this.x, y: this.y};
            let arr = [point1, point2, point3, ' ', point5];
            return arr;
        }
}

class Rhombus{
        constructor(x, y, a, color){ // Координаты центра, длина стороны, цвет
            this.x = x;
            this.y = y;
            this.a = a;
            this.color = color;
            this.speed = getRandom(1, max_speed);

            this.dx = 1*this.speed;
            this.dy = 1*this.speed;
        }
        draw(ctx){
            ctx.beginPath();
            ctx.moveTo(this.x+this.a, this.y);
            ctx.lineTo(this.x, this.y+this.a/2); 
            ctx.lineTo(this.x-this.a, this.y);
            ctx.lineTo(this.x, this.y-this.a/2);
            ctx.strokeStyle = this.color;
            ctx.closePath();
            ctx.stroke();
        }    

        update(ctx, canv){
            this.draw(ctx);

            if((this.x+this.a) > canv.width)
                this.dx = -this.dx;
            if((this.x-this.a) < 0)
                this.dx = -this.dx;
            if((this.y+this.a/2) > canv.height)
                this.dy = -this.dy;
            if((this.y-this.a/2) < 0)
                this.dy = -this.dy;

            this.x += this.dx;
            this.y += this.dy;
        }     
        
        get_coordinates(){
            let point1 = {x: this.x+this.a, y: this.y};
            let point2 = {x: this.x, y: this.y+this.a/2};
            let point3 = {x: this.x-this.a, y: this.y};
            let point4 = {x: this.x, y: this.y-this.a/2};
            let point5 = {x: this.x, y: this.y};
            let arr = [point1, point2, point3, point4, point5];
            return arr;
        }
}

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
function getRandomRGBColorString() {
    return "#" + ("000000" + Math.floor(0xffffff * Math.random()).toString(16)).slice(-6);
}
