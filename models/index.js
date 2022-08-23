const mongoose = require("mongoose");
const db = mongoose.connection;

mongoose
  .connect(process.env.MONGDB_URI)
  .then(() => {
    console.log(`Mongodb connected at ${db.host}:${db.port}`);
  })
  .catch((err) => console.log(err));

module.exports = { Post: require("./Post") };
