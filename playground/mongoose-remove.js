const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

//Delete multiple records
// Todo.remove({}).then((result) => {
//   console.log(result);
// });

//returns the document
Todo.findOneAndRemove({
  _id: '5a1b8a6aa4914bfa0619e522'
}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('5a1b8a6aa4914bfa0619e522').then((todo) => {
  console.log(todo);
});
