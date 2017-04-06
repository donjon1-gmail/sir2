/**
 * PhoneLink.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	migrate: 'safe',
	autoPK: false, 
  autoCreateAt: false,
  autoUpdateAt: false,
  attributes: {
	id: {
		type: 'integer', 
		index: true,
	    unique: true,
	    primaryKey: true,
	    autoIncrement: true,
	},
    ownerId:{
	      type: 'string', 
		index: true,
	      foreignKey: true,
	      size: 8,
    	},
    phoneId: {
    	model: "Phone", 
		index: true,
	      foreignKey: true,
    },
    comment: {
    	type: 'string',
    	size: 64,
    },
  }
};

