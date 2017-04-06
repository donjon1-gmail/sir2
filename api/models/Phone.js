/**
 * Phone.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
	  id: {
			type: 'integer', 
			index: true,
		    unique: true,
		    primaryKey: true,
		    autoIncrement: true,
		},
	  phone: {
	  	type: 'string',
	  	size: 16,
	  },
	  flags: {
	  	type: 'string',
	  	required: true,
	  	size: 2,
	  	enum:  ['m','l','e','x','em'],
	  }
  }
};

