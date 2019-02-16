const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to Mongo Db Server");
  }
  console.log("Connected to Mongo Server");
  const db = client.db("TodoApp");
  //   db.collection("Todos").insertOne(
  //     {
  //       text: "Something to do",
  //       completed: false
  //     },
  //     (err, result) => {
  //       if (err) {
  //         return console.log("Unable to Insert Todo", err);
  //       }
  //       console.log(JSON.stringify(result.ops), undefined, 2);
  //     }
  //   );
  db.collection("Users").insertOne(
    {
      name: "Mohammad Shariq",
      age: 27,
      location: "Kanpur"
    },
    (err, result) => {
      if (err) {
        return console.log("Unable to Insert Record", err);
      }
      console.log(JSON.stringify(result.ops, undefined, 2));
    }
  );
  client.close();
});
