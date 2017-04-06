/**
 * Class_Instructor.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'shciServer',

  attributes: {
	  classCode: {
	  	type: 'string',
		index: true,
		unique: true,
		primaryKey: true,
		size: 6,
	  },
	  staffId: {
	  	model: 'staff',
	  },
	  courseCode: {
	  	model: 'course',
	  },
	  students: {
	  	//One to Many
	      collection: 'Student',
	      references: 'id',
	      via: 'grades', 
	      on: 'classCode',

	  },
  }
};

