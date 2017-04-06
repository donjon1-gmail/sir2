/**
 * G02_populationQuery.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'G02_populationQuery',
	tableName: 'G02_populationQuery',
	connection: 'shciServer',
	migrate: 'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,

  attributes: {
  	form:	{ type: 'integer' },
	room:	 { type: 'string'},
	Population:{ type: 'integer' },
  }
};

