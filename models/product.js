var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
  imagePath: {type: String, require: true},
  name: {type: String, require: true},
  rating: {type: String, require: true},
  price: {type: String, require: true}
});

module.exports = mongoose.model('Product', schema);
