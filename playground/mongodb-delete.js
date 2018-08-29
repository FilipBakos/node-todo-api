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

	//delete many
	/*db.collection('Todos').deleteMany({text: 'Kup jedlo'}).then((result) => {
		console.log('Vymazane zaznamy');//v resulte je ci to bolo ok a pocet, pristup ku tomu result.ok(sa ma rovnat 1),result.n 
	}, (err) => {
		console.log('Error ', err);
	});*/

	//delete one
	/*db.collection('Todos').deleteOne({text: 'Kup chlieb'}).then((result) => {
		console.log('Vymazany zaznam.');
		console.log(result);
	}, (err) => {
		console.log('Error ',err);
	});*/

	//find one and delete
	// db.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
	// 	console.log(result);
	// });


	db.collection('Users').findOneAndDelete({_id: new ObjectID('5b85112d82e6f43030afcfab')}).then((result) => {
		console.log(result);
	}, (err) => {
		console.log('Error : ',err);
	})

	// client.close();
});
