let mongoose = require('mongoose');

mongoose.Promise = global.Promise; //set up to use promises
mongoose.connect('mongodb://127.0.0.1:27017/TodoApp');


module.exports = {mongoose};