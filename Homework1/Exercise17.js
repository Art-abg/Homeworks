//Ex.17 
//Given two objects representing rectangles with properties width and height, write a function to
//compare if they have the same area.

const rectangle1 = {
    width: 5,
    height: 10,
   };
   const rectangle2 = {
    width: 10,
    height: 5,
   };
   const rectangle3 = {
    width: 6,
    height: 8,
   };

   function areRectanglesSameArea (rect1, rect2){
    let area1 = rect1.width * rect1.height;
    let area2 = rect2.width * rect2.height;

    return area1 === area2;
    
   }

console.log(areRectanglesSameArea(rectangle1, rectangle2));   // Output: true
console.log(areRectanglesSameArea(rectangle1, rectangle3)) // Output: false


