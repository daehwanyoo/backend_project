const mongoose = require("mongoose");

const MONGOURI = "mongodb+srv://daehwanyoo0505:J6QQV7V6kpCE4FBK@daehwanyoo0505.h4lf2wd.mongodb.net/?retryWrites=true&w=majority";

const InitiateMongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true
    });
    console.log("Connected to DB !!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};

module.exports = InitiateMongoServer;