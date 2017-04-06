/**
 * Menu.js
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
	    autoIncrement: true,
      primaryKey: true,
  	},
  	name: {
		type: 'string', 
		size: 32,
  	},
  	parent:{
		type: 'integer', 
  	},
  	accessGE:{
		type: 'integer', 
  	},
  	accessEQ:{
  		type: 'integer',
  	},
  	link: {
  		type: 'string', 
		size: 255,
  	},
  	target: {
		type: 'string', 
		size: 32,
  	},  	
  	active: {
  		type: 'boolean',
  	},
  }
};

