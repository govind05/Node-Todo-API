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

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID("5a637fcffcd27ea75636c9c7")
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then(res => {
  //   console.log(res);
  // })
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID("5a6381c1fcd27ea75636c9c9")
  }, {
    $set: {
      name: 'Lalit'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }).then(res => {
    console.log(res);
  })

  // db.close();
});