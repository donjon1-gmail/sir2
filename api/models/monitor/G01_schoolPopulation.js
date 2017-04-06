/**
 * G01_schoolPopulation.js
 *
 * Population of College.
 *
 */

module.exports = {
	identity: 'G01_schoolPopulation',
	tableName: 'G01_schoolPopulation',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,

  attributes: {
  	report:           { type: 'string' },
  	Population:       { type: 'integer' }
  }
};

