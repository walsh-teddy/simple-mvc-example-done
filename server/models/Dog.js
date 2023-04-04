const mongoose = require('mongoose');

let DogModel = {};

const DogSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  breed: {
    type: String,
  },
  age: {
    type: Number,
  },
  createdDate: {
    type: Date,
  },
});

DogModel = mongoose.model('Dog', DogSchema);

module.exports = DogModel;
