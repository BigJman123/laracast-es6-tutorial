// class User {
// 	constructor(username, email) {
// 		this.username = username;
// 		this.email = email;
// 	}

// 	static register(...args) {
// 		return new User(...args);
// 	}

// 	get foo() {
// 		return 'foo';
// 	}

// 	changeEmail(newEmail) {
// 		this.email = newEmail;
// 	}
// }

// let user = User.register('JeffreyWay', 'support@laracsts.com');

// console.dir(user);

// console.log(user.foo);

function log(strategy) {
	strategy.handle();
}

log(new class {
	handle() {
		alert('Using the alert strategy to log');
	}
});