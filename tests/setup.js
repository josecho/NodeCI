// in package.json: "test": "jest --detectOpenHandles"
//jest.setTimeout(30000);

require("../models/User");

const mongoose = require("mongoose");
const keys = require("../config/keys");

mongoose.Promise = global.Promise;
//mongoose.connect(keys.mongoURI, { useMongoClient: true });
mongoose.connect(keys.mongoURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});
