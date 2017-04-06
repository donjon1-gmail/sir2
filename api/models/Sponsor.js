/**
 * Sponsor.js
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
  	  email: {
	  		type: 'string',
	  		size: 50,
  	  	},
  	  FAX: {
	  		type: 'string',
	  		size: 30,
  	  	},
	  contactLastName:{
	  		type: 'string',
	  		size: 50,
		},
  	  contactFirstName:{
  	  		type: 'string',
	  		size: 50,
		},
  	  notes: {
	  		type: 'text',
  	  	},
	  contactTitle:{
	  		type: 'string',
	  		size: 50,
		},
	  companyName:{
	  		type: 'string',
	  		size: 100,
		},

  }
};

