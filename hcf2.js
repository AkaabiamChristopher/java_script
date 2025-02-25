function hcf2(a, b) {
    if (b === 0) return a;
    return hcf2(b, a % b);
  }
  
  let input = [6, 9, 15];
   let hcfValue = input.reduce((acc, num) => hcf2(acc, num));
  

  let output = [hcfValue];
  console.log(output);
  