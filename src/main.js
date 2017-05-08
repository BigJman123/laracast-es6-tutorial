// you can import like this. you can import more than one item
// import { TaskCollection, foo } from './TaskCollection';
// or like this
// import TaskCollection, { foo } from './TaskCollection';
// or like this
import TaskCollection from './TaskCollection';

new TaskCollection([
	'Go to store',
	'Finish screencast',
	'Eat cake'
]).dump();  