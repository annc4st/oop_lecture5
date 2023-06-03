/*Write class Circle with next functional:

The constructor takes as input center point {x:number, y:number} and radius.
Method getLenght for obtain length of circle (L = 2 * Pi * R).
Static method getLenghtFromRadius for obtain length of circle with corresponding radius r (L = 2 * Pi * r).
Method getCopy which return copy of this object.
Static method createCircle(x, y, r) which obtain as input x, y - coordinates of center and r - circle radius, create nad return new Circle wit this parameters.
Method checkPointInside(point) which obtain as parametes point = {x:namber, y:number} and return bollean response of whether the point is inside the circle.
Override method toString to return description ob circle object as string as in examples.*/

/* const circle = new Circle({x: 1, y: 1}, 2)
console.log(String(circle))
Circle with center in 1,1 and radius 2
const circle = Circle.createCircle(10, 15, 34)
console.log(String(circle))
Circle with center in 10,15 and radius 34
const circle = new Circle({x: 1, y: 1}, 5)
console.log(circle.getLenght().toFixed(1))
31.4
console.log(Circle.getLenghtFromRadius(10).toFixed(1))
62.8
const circle = new Circle({x: 2, y: 2}, 20)
const pointInside = {x: 3, y: 3}
console.log(circle.checkPointInside(pointInside))
true*/

class Circle{
    //Your code
    constructor({x, y}, rad){
        this.point = {};
        this.point.x = x;
        this.point.y = y;
        this.rad = rad;
    }
    toString(){
        return `Circle with center in ${this.point.x},${this.point.y} and radius ${this.rad}`;
    }

    getLenght(){
        return 2 * Math.PI * this.rad;
    }
    
    static getLenghtFromRadius(rad){
        return 2 * Math.PI * rad;
    }
    
    static createCircle(x, y, rad){
        return `Circle with center in ${x},${y} and radius ${rad}`;
    }
    
    checkPointInside({x, y}){
        if (Math.pow((x - this.point.x), 2) + Math.pow((y - this.point.y), 2) < Math.pow((this.rad), 2)) {
            return true;
        }
        return false;
        
    }
    
    getCopy() {
        return new Circle(this.point, this.rad);
    }
     
    
}
