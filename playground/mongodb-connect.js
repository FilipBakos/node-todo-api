//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj)


MongoClient.connect('mongodb://127.0.0.1:27017/TodoApp',{useNewUrlParser: true},(err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	} 

	console.log('Connected to MongoDB server');
	const db = client.db('TodoApp');


//INSERT
	// db.collection('Todos').insertOne({
	// 	text: "Something to do",
	// 	completed: false
	// }, (err, result) => {
	// 	if(err) {
	// 		return console.log('Unable to insert todo ',err);
	// 	}

	// 	console.log(JSON.stringify(result.ops, undefined, 2));
	// });
	
	db.collection('Users').insertOne({
		name: 'Filip1',
		age: '22',
		location: 'Krasna Horka'
	}, (err, result) => {
		if(err){
			return console.log('Unable to insert User ', err);
		}

		console.log(JSON.stringify(result.ops, undefined, 2));
	});

	client.close();
});
