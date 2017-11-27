const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

 var password = 'boxanne';
// bcrypt.genSalt(10, (err,salt) => {
//   bcrypt.hash(password,salt,(err,hash) => {
//     console.log(hash);
//   });
// });

var hashedPassword = '$2a$10$ew5ge0oUmV50eOXDqKeTJ.VAHxBM6OeK5iTAIRM6jfzQmB2ag98S6';
bcrypt.compare(password,hashedPassword,(err,res) => {
    console.log(res);
});

// var data = {
//   id: 42
// };

//
// var token = jwt.sign(data,'secret');
// console.log(token);
//
// var decoded = jwt.verify(token,'secret');
// console.log('decoded:',decoded);

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
