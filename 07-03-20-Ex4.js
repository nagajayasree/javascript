//Write a JavaScript program to find the area of a triangle 
//where lengths of the three of its sides are 5, 6, 7.

let s1 = 5,s2 = 6,s3 =7;
let perimeter = (s1+s2+s3)/2;
let area = Math.sqrt(perimeter*((perimeter-s1)*(perimeter-s2)*(perimeter-s3)));
console.log(area);
