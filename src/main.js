function sum(x, y) {
	return x + y;
}

let nums = [1, 2];

console.log(sum(...nums));



// function sum(...numbers) {
// 	return numbers.reduce(function(prev, current) {
// 		return prev + current;
// 	});
// }

// console.log(sum(1, 2, 3));



// the code below is a refactor of the above code (line 11)
// function sum(...numbers) {
// 	return numbers.reduce((prev, current) => prev + current);
// }

// console.log(sum(1, 2, 3));



