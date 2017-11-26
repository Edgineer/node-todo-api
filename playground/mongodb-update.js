// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

//two arguements
//1: URL where database lives
//2: callback function firing after connection succeed/fail
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
  if (err) {
    return console.log('unable to connect to MongoDB server');
  }

  // //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a1a000ea4914bfa0619812a')
  // },  {
  //   $set: {
  //       completed: true
  //   }
  // },{
  //   returnOriginal: false
  // }).then( (result) => {
  //   console.log(result);
  // });

  //findOneAndUpdate
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a19e363c5f7942e880a41fc')
  },  {
    $inc: {age: 1},
    $set: {
        username: 'Esperanza'
    }
  },{
    returnOriginal: false
  }).then( (result) => {
    console.log(result);
  });

  //db.close();
});
