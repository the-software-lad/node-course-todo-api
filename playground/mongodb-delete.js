const { MongoClient, ObjectId } = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
  if (err) {
    return console.log("Unable to Connect to MongoDB :", err);
  }

  console.log("Connected to MOngo DB");

  const db = client.db("TodoApp");
  //deleteMany
  //deleteOne
  //findOneAndDelete
  db.collection("Todos")
    .deleteMany({ text: "Eat Lunch" })
    .then(result => {
      console.log(result);
    });
});
