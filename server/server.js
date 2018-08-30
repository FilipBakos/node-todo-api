const express = require('express');
const bodyParser = require('body-parser');

let {mongoose} = require('./db/mongoose');
let {User} = require('./models/user');
let {Todo} = require('./models/todo');

var app = express();



const port =  process.env.PORT || 3000 ; 

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
		let todo = new Todo({
			text: req.body.text
		});

		todo.save().then((doc) => {
			res.send(doc);
		}, (e) => {
			res.status(400).send(e);
		});
});

app.listen(port, () => {
	console.log('App is on port ',port);
});




// var Todo = mongoose.model('Todo', {
// 	text: {
// 		type: String,
// 		required: true, ////je povinne
// 		minlength: 1, //minimalna dlzka
// 		trim: true//vymaze medzery
// 	}, 
// 	completed: {
// 		type: Boolean,
// 		default: false
// 	},
// 	completedAt: {
// 		type: Number,
// 		default: null
// 	}
// });

/*let todo = new Todo({
	text: 'Kup knihu 2',
	completed: true,
	completedAt: new Date().getTime()
});

todo.save().then((result) => {
	console.log('Result: ', JSON.stringify(result, undefined, 2));
}, (err) => {
	console.log('Error: ',err);
});

*/

// let todo = new Todo({
// 	text: 'Kup knihu 2',
// 	completed: true,
// 	completedAt: new Date().getTime()
// });

// todo.save().then((result) => {
// 	console.log('Result: ', JSON.stringify(result, undefined, 2));
// }, (err) => {
// 	console.log('Error: ',err);
// });


// let User = mongoose.model('User', {
// 	email: {
// 		type: String,
// 		required: true,
// 		trim: true,
// 		minlength: 1
// 	}
// });

// let user = new User({
// 	email: '     filipbakos@gmail.com             '
// });

// user.save().then((result) => {
// 	console.log('Result: ', JSON.stringify(result, undefined, 2));
// }, (e) => {
// 	console.log('Error', e);
// })