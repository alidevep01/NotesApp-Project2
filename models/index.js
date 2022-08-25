const mongoose = require("mongoose");
const db = mongoose.connection;
console.log(process.env.MONGODB_URI);
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log(`Mongodb connected at ${db.host}:${db.port}`);
  })
  .catch((err) => console.log(err));

module.exports = { data: require("./notes") };
