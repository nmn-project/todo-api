const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user')

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

Todo.findOneAndRemove({_id: '5bce0a2a9bc82a7e6e55bf2d'}).then((todo) => {

});

Todo.findByIdAndRemove('5bce0a2a9bc82a7e6e55bf2d').then((todo) => {
  console.log(todo);
});
