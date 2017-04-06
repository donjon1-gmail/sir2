/**
 * G02_populationQuery1.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'G02_populationQuery1',
	tableName: 'G02_populationQuery',
	connection: 'shciServer',
	migrate: 'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,
//	keepDirectoryPath: true,

  attributes: {
  	form:	{ type: 'integer' },
	Room:	 { type: 'string', size: 1, columnName: 'room', },
	Population:{ type: 'integer' },
  }
};
