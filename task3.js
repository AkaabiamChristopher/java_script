function test (input) {

	let conjugateStr = "";
	 let result;
	let resultArray = []

	for (let integer of input) {
	conjugateStr += integer.toString();
	}
		
	result = Number(conjugateStr) + 1

	for (let digit of String(result))
		Number(resultArray.push(digit))

	console.log(resultArray)
	}
input = [9,9,9]
test(input)

input = [3,4,2]
test(input)
