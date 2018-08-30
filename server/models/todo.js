let mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
	text: {
		type: String,
		required: true, ////je povinne
		minlength: 1, //minimalna dlzka
		trim: true//vymaze medzery
	}, 
	completed: {
		type: Boolean,
		default: false
	},
	completedAt: {
		type: Number,
		default: null
	}
});

module.exports = {Todo};