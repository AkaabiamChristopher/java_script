function reverse(input){
let total = 0;
while (input > 0){
 total = total * 10 + (input % 10)
 input = Math.floor(input / 10);

}

return total

}

console.log(reverse(25))

function palindrome(input) {
  let reversed = reverse(input);
  if (input === reversed) {
    return true;
  } else {
    return false;
  }
}
console.log(palindrome(454))