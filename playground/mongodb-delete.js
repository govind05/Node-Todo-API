// const MongoClient = require('mongodb').MongoClient;
const {
  MongoClient,
  ObjectID
} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB Server');
  }
  console.log('Connected to MongoDB server');

  //deleteMany
  // db.collection('Todos').deleteMany({
  //   text: 'Eat Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  //deleteone
  // db.collection('Todos').deleteOne({
  //   text: 'Eat Lunch'
  // }).then((result) => {
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((docs) => {
  //   console.log(docs);
  // });
  // db.collection('Users').deleteMany({
  //   name: 'Lalit'
  // }).then((res) => {
  //   console.log(res);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5a637b94fcd27ea75636c9c2')
  }).then((res) => {
    console.log(res);
  });


  // db.close();
});