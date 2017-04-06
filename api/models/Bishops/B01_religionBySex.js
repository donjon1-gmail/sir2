/**
 * Bishops/B01_religionBySex.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'B01_religionBySex',
	tableName: 'B01_religionBySex',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,
  attributes: {
  	Religion: {
  		type: 'string',
  		size: 32,
  	},
  	Sex: {
  		type: 'string',
  		size: 1,
  	},
  	religionBySex: {
  		type: 'integer',
  		columnName: 'Religion by Sex',
  	},

     toJSON: function() {
      const religion = this.toObject();
      let record = {};
      record["Religion "] = religion.Religion;
      record["Sex "] = religion.Sex;
      record["Religion by Sex "] = religion.religionBySex;
      return record;
    }
  }
};
