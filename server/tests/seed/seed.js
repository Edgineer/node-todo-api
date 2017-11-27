const {ObjectID} = require('mongodb');
const {Todo} = require('./../../models/todo');
const{User} = require('./../../models/user');
const jwt = require('jsonwebtoken');

const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
  _id: userOneId,
  username: 'eltigremayor',
  password: 'ganaeltitulo',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id:userOneId, access:'auth'},'secretvalue').toString()
  }]
}, {
  _id: userTwoId,
  username: 'amorfalso',
  password: 'miclave',
  tokens: [{
    access: 'auth',
    token: jwt.sign({_id:userTwoId, access:'auth'},'secretvalue').toString()
  }]
}];

const todos = [{
  _id: new ObjectID(),
  _creator: userOneId,
  text: "First test todo"
  }, {
    _id: new ObjectID(),
    _creator: userTwoId,
    text: "Second test todo",
    completed: "true",
    completedAt: 213
}];

const populateTodos = (done) => {
  Todo.remove({}).then(() => {
    return Todo.insertMany(todos);
  }).then(() => done());
};

const populateUsers = (done) => {
  User.remove({}).then(() => {
    var userOne = new User(users[0]).save();
    var userTwo = new User(users[1]).save();

    return Promise.all([userOne, userTwo])
  }).then(() => done());
};

module.exports = {todos, populateTodos, users, populateUsers};
