// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//two arguements
//1: URL where database lives
//2: callback function firing after connection succeed/fail
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  // //deleteMany
  // db.collection('Todos').deleteMany({text:'Eat Lunch'}).then( (result) => {
  //   console.log(result);
  // });
  //
  // //deleteOne
  // db.collection('Todos').deleteOne({text:'Eat Lunch'}).then(  (result) => {
  //   console.log(result);
  // });

  //findOneandDelete
  //db.collection('Todos').findOneAndDelete({completed: false}).then(  (result) => {
  //  console.log(result);
  //});

  db.collection('Users').deleteMany({username: 'Edgineer'});

  //db.collection('Users').findOneAndDelete({_id: new ObjectID("5a19e76e6940e91c5c77802c")}).then((results) => {
  //  console.log(JSON.stringify(results));
  //})

  //db.close();
});
