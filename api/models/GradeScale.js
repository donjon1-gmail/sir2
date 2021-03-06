/**
 * GradeScale.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'shciServer',

  attributes: {
	  id: {
		type: 'integer', 
		index: true,
	    unique: true,
	    primaryKey: true,
	    autoIncrement: true,
		},
	  grade: {
	  	type: 'string',
	  	size: 2,
	  },
	  value: {
	  	type: 'float',
	  },
  }
};

