const {
  ObjectID
} = require('mongodb');

const {
  mongoose
} = require('./../server/db/mongoose');
const {
  Todo
} = require('./../server/models/todo');
const {
  User
} = require('./../server/models/user');

// Todo.remove({}).then(res => console.log(res));

// Todo.findOneAndRemove()
// Todo.findByIdAndRemove

Todo.findOneAndRemove({
  _id: '5a6446f469567d2ebae3b680'
}).then((todo) => {

})

Todo.findByIdAndRemove('5a6446f469567d2ebae3b680').then((doc) => {
  console.log(doc);
});