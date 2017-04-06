/**
 * Address.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'shciServer',
  attributes: {
    id:{
      type: 'string', 
      foreignKey: true,
      index: true,
      unique: true,
      primaryKey: true,
      size: 8,
    },
	address:{
		type: 'text',
	},
	town: {
		model: 'Town',
	},
	district: {
		model: 'District',
	},
	country: {
		model: 'Country',
	},
  }
};

