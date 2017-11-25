// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//two arguements
//1: URL where database lives
//2: callback function firing after connection succeed/fail
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }
  // console.log('Connected to MongoDB server');
  // db.collection('Todos').insertOne({
  //   petName:"Fluffy"
  // }, (err,result) => {
  //   if (err) {
  //     return console.log('Unable to insert todo', err);
  //   }
  //   console.log(JSON.stringify(result.ops,undefined,2));
  // });

  //db.collection takes a single string specifying which collection to add the document to
  //insertOne takes two parameters, the document and a callback function
  db.collection('Users').insertOne({
    username:"Edgineer",
    age:"20",
    location:"Bellflower"
  }, (err,result) => {
    if (err) {
      return console.log('unable to insert to user', err);
    }
    console.log(result.ops[0]._id.getTimestamp());
  });
  db.close();
});
