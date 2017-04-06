/**
 * G03_SIGQuery.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'G03_SIGQuery',
	tableName: 'G03_SIGQuery',
	connection: 'shciServer',
	migrate: 'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,

  attributes: {
  	form:	{ type: 'integer' },
	classCode:	 { type: 'string', size:6, },
	Population:{ type: 'integer' }
  }
};

