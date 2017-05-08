// you can export like this or you can export at the bottom of a page
// you can export more than one item
// export TaskCollection
// export default TaskCollection

 var TaskCollection = function TaskCollection(tasks) {
	if ( tasks === void 0 ) tasks = [];

	this.tasks = tasks;
};

TaskCollection.prototype.dump = function dump () {
	console.log(this.tasks);
};

// you can import like this. you can import more than one item
// import { TaskCollection, foo } from './TaskCollection';
// or like this
// import TaskCollection, { foo } from './TaskCollection';
// or like this
new TaskCollection([
	'Go to store',
	'Finish screencast',
	'Eat cake'
]).dump();
