function getPassingScores(testScores) {
    return testScores.filter(score => score >= 70);
  }
  
  const testScores = [67, 76,70, 81,73, 66];
  const passingScores = getPassingScores(testScores);
  
  console.log(passingScores);