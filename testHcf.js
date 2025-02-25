
let testInput = [4, 8, 12];
let expectedOutput = [2, 2];

let testHcfArray = testInput.reduce((acc, num) => Hcf(acc, num));
let testOutput = [testHcfArray, testHcfArray, testHcfArray];

if (JSON.stringify(testOutput) === JSON.stringify(expectedOutput)) {
    console.log("Test Passed!");
} else {
    console.log("Test Failed!");
}

console.log("Test Output:", testOutput);
console.log("Expected Output:", expectedOutput);
