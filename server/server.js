const {ObjectID} = require('mongodb');
const express = require('express');
const bodyParser = require('body-parser');

var{mongoose} = require('./db/mongoose');
var{Todo} = require('./models/todo');
var{User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req,res) =>{
  var todo = new Todo({
    text: req.body.text
  });
  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.status(400).send(e);
  });
});

app.get('/todos',(req,res) => {
  Todo.find().then((todos) => {
    res.send({todos});
  }, (e) => {
    res.status(400).send(e);
  });
});

//GET /todos/123

//findById
  //success
    //if todo- send it back
    //if no todo - send back a 404 with an empty body
  //error
    //400 - and send empty body back

app.get('/todos/:id', (req,res) => {
  var id = req.params.id;

  //validate id using isValid, send back 404 & empty
  if(!ObjectID.isValid(id)){
      return res.status(404).send();
  }
  Todo.findById(id).then( (todo) =>{
    if (!todo) {
      res.status(404).send();
    }
    res.status(200).send({todo});
  }).catch((e) => {
    res.status(400).send();
  });
});





app.listen(port, () => {
  console.log(`Started on port ${port}`);
})

module.exports = {
  app:app
};
