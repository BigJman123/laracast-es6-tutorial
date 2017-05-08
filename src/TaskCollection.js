// you can export like this or you can export at the bottom of a page
// you can export more than one item
// export TaskCollection
// export default TaskCollection

 class TaskCollection {
	constructor(tasks = []) {
		this.tasks = tasks;
	}

	dump() {
		console.log(this.tasks);
	}
}

// like this
// export default TaskCollection