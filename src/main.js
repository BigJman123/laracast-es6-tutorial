// object shorthand

// function getPerson() {
// 	let name = 'John';

// 	let age = 25;

// 	return {
// 		name,

// 		age,

// 		greet() { // ES6
// 			return `Hello, ${this.name}`;

// 			// return 'Hello, ' + this.name;
// 		}

// 	};
// }

// alert(getPerson().greet());

// let { name, age } = person;

// alert(name);





// let data = {
// 	name: 'Karen',
// 	age: 32,
// 	results: ['foo', 'bar'],
// 	count: 30
// };

// let {results, count } = data;

// console.log(results, count);





// function getData({results, count}) {
// 	// var results = data.results; // ES5
// 	// var count = data.count;

// 	console.log(results, count);
// }

// getData({
// 	name: 'Karen', 
// 	age: 32,
// 	results: ['foo', 'bar'],
// 	count: 30
// });



// This is the ES5 way
// function greet(person) {
// 	let name = person.name;
// 	let age = person.age;

// 	console.log('Hello, ' + name + '. You are ' + age);
// }

// greet({
// 	name: 'Luke',
// 	age: 24
// })


// This is the ES6 way
function greet({name, age}) {
	console.log(`Hello, ${name}. You are ${age}.`);
}

greet({
	name: 'Luke',
	age: 24
})













