function sumOfDigits(number){
  let sum = 0;
  let numStr = number.toString();
  for (let count = 0; count <numStr.length; count++){
  sum +=parseInt(numStr[count]);
   }
   return sum;
}
console.log(sumOfDigits(1234));