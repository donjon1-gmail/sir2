/**
 * Bishops/B02_religionByForm.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'B02_religionByForm',
	tableName: 'B02_religionByForm',
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
  	Form: {
  		type: 'integer',
  	},
  	religionBySexAndForm: {
  		type: 'integer',
  		columnName: 'Religion by Sex and Form',
  	},

     toJSON: function() {
      const religion = this.toObject();
      let record = {};
      record["Religion "] = religion.Religion;
      record["Sex "] = religion.Sex;
      record["Form "] = religion.Form;
      record["Religion by Sex and Form "] = religion.religionBySexAndForm;
      return record;
    }
  }
};
