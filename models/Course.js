


const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const CourseSchema = new Schema({
        title: {
          type: String,
          required: true
        },
        category: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
	technologies: {
          type: String,
          required: true
        },
        createdDate: {
          type: Date,
          default: Date.now
        },
        link: {
          type: String
        },
	plataform: {
          type: String
        },
	image: {
		type: String

	}
  });


module.exports = mongoose.model('Course', CourseSchema);
