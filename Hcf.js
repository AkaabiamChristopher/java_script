function Hcf(a, b, c) {
    if (b === 0) return b;
    return Hcf(b, a % c);
  }
  
  let input = [4, 12, 8];
  let hcfArray = input.reduce((acc, num) => Hcf(acc, num));
  
  let output = [hcfArray, hcfArray,hcfArray];
  console.log(output);
  