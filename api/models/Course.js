/**
 * Course.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'shciServer',

  attributes: {
	  courseCode: {
	  	type: 'string',
		index: true,
		unique: true,
		primaryKey: true,
		size: 3,
	  },
  	  name: {
  	  	type: 'string',
  	  },
  	  hours: {
  	  	type: 'integer', 
  	  },
  	  creditHours: {
  	  	type: 'integer',
  	  },
  	  singleSem: {
  	  	type: 'boolean',
  	  	default: false,
  	  },
  }
};

