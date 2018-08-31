const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = "5b87fbf054df1d054cf0034f11";

// if(!ObjectID.isValid(id)){
// 	console.log('ID NOT VALID');
// }

/*Todo.find({
	_id: id //tu netreba pretypovat string na model ObjektID, mongoose spravi za nas
}).then((todos) => {
	console.log('Todos: ',todos);
});

Todo.findOne({
	_id: id //tu netreba pretypovat string na model ObjektID, mongoose spravi za nas
}).then((todo) => {
	console.log('Todo: ',todo);
});
*/
// Todo.findById(id).then((todo) => {
// 	if(!todo){
// 		return console.log('Id not found');
// 	}
// 	console.log('Todo BY ID: ',todo);
// }).catch((e) => console.log('Error 22222222222222 : ',e));
// 
// 

let idUser = '5b880aac56465c2cfc0efb7b';

if (!ObjectID.isValid(idUser)) {
	console.log('Invalid user ID');
}

User.findById(idUser).then((result) => {
	if(!result){
		return console.log('Zle id');
	}
	console.log('User: ', result);
}).catch((e) => {
	console.log('Error1: ',e);
})