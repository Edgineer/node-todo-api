const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');

var data = {
  id: 42
};


var token = jwt.sign(data,'secret');
console.log(token);

var decoded = jwt.verify(token,'secret');
console.log('decoded:',decoded);
// var message = 'I am a user';
// var hash = SHA256(message).toString();
//
// console.log('Message:',message);
// console.log('Message Hash:',hash);
//
// var data = {
//   id: 4
// };
//
// var token = {
//   data: data,
//   hash: SHA256(JSON.stringify(data) + 'secretstring').toString()
// }
//
// token.data.id = 5;
// token.hash = SHA256(JSON.stringify(token.data)).toString();
//
// var resultHash = SHA256(JSON.stringify(token.data) + 'secretstring').toString();
// if (resultHash === token.hash) {
//   console.log('Data wasnt changed');
// } else {
//   console.log('data was changed');
// }
