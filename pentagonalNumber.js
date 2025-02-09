function pentagonalNumber(n){
  return n * (3 * n - 1) / 2;
}
for(let count = 1; count <= 10; count++){
  console.log(`the $(count)the pentagonal number is ${pentagonalNumber(count)}`);
}