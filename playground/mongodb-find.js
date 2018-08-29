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

	//db.collection('Todos').find() // -> toto je pointer na tu kolekciu(tabulku), vrati vsetko co je v tej tabulke
	//potom sa vyberie metoda, toArray, count,...
	// db.collection('Todos').find().toArray().then((docs) => {
	// 	console.log('TODOS');
	// 	console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) =>{
	// 	console.log('Unable to fetch todos ',err);
	// });

	//ak chcem vybrat len nieco, tak do findu poslem object
	/*db.collection('Todos').find({
		_id: new ObjectID('5b850fa05219a410e453e425') // -> takto sa vybera document s danym id
	}).toArray().then((docs) => {
		console.log('TODOS');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) =>{
		console.log('Unable to fetch todos ',err);
	});*/

	/*db.collection('Todos').find().count().then((count) => {
		console.log(`TODOS count ${count}`);
	}, (err) =>{
		console.log('Unable to fetch todos ',err);
	});*/

	db.collection('Users').find().count().then((count) => {
		console.log(`users count: ${count}`);
	}, (err) => {
		console.log(`Unable to fetch data: ${err}`);
	});

	// client.close();
});
