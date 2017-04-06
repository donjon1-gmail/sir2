/**
 * School.js
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
	  name: {
	  	type: 'string',
	  	size: 64,
	  },
  	  contactFirstName:{
  	  		type: 'string',
	  		size: 20,
		},
	  contactLastName:{
	  		type: 'string',
	  		size: 20,
		},
	  contactTitle:{
	  		type: 'string',
	  		size: 20,
		},
  	  phone: {
	  		type: 'string',
	  		size: 50,
  	  	},
  	  extension: {
  	  		type: 'integer',
  	  	},
  	  fax: {
	  		type: 'string',
	  		size: 50,
  	  	},
  	  email: {
	  		type: 'string',
	  		size: 50,
  	  	},
  	  notes: {
	  		type: 'text',
  	  	},
  	  secondary: {
  	  		type: 'boolean',
  	  		defaultsTo : false,
  	  	},
  }
};

