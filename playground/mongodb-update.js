//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj)

MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',{useNewUrlParser: true},(err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	} 

	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');

	//find one and update
	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b8510ab50cac410d4783a08')
	}, {
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});	
	// client.close();
});
