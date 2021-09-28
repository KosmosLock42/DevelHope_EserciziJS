class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {

  // area = 0;
  // constructor(area){
  //   this.area = area;
  // }

  static calculate(area){
   if(area instanceof Square) {
      area = area.side * area.side;
      return area;
   } else if(area instanceof Rectangle){
     area = area.height * area.width;
     return area;
   } else{
     area = Math.round((area.radius ** 2) * 3.14);
     return area;
   }
      
    }  
}
    
  



const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));