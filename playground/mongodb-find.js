const { MongoClient, ObjectId } = require("mongodb");
MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to connect MongoDB server");
  }
  const db = client.db("TodoApp");

  // db.collection("Todos")
  //   .find({ completed: false })
  //   .toArray()
  //   .then(
  //     docs => {
  //       console.log("Todos");
  //       console.log(JSON.stringify(docs, undefined, 2));
  //     },
  //     err => {
  //       console.log("Unable to fetch todos", err);
  //     }
  //   );
  // db.collection("Todos")
  //   .find()
  //   .count()
  //   .then(
  //     count => {
  //       console.log(`Todos Count: ${count}`);
  //     },
  //     err => {
  //       if (err) {
  //         console.log("Unable to fetch todos", err);
  //       }
  //     }
  //   );

  db.collection("Users")
    .find({ name: "Mohammad Shariq" })
    .toArray()
    .then(docs => {
      console.log(JSON.stringify(docs), undefined, 2);
    });
  //client.close();
});
