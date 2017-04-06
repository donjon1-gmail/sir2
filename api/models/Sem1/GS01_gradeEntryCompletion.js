/**
 * Sem1/GS01_gradeEntryCompletion.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	identity: 'GS01_gradeEntryCompletion',
	tableName: 'GS01_gradeEntryCompletion',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,

  attributes: {

  	Name: {
  		type: 'string',
  		size: 66,
  		columnName: 'name',
  	},
  	Complete: {
  		type: 'decimal',
  		precision: (7,5),
  		columnName: 'Complete%',
  	},
  	Incomplete: {
  		type: 'integer',
  		columnName: 'Incomplete#',
  	},
  	FailCount: {
  		type: 'integer',
  		columnName: 'Fail Count',
  	},
  	F_Count: {
  		type: 'integer',
  		columnName: 'F-Count',
  	},
  	NumberOfRecords: {
  		type: 'integer',
  		columnName: 'Records#',
  	},
  	Fails: {
  		type: 'decimal',
  		precision: (7,5),
  		columnName: 'Fail%',
  	},

    toJSON: function() {
      const student = this.toObject();
      let record = {};
      record["Name "] = student.Name;
      record["Complete% "] = student.Complete;
      record["Incomplete "] = student.Incomplete;
      record["Fail Count "] = student.FailCount;
      record["F Count "] = student.F_Count;
      record["Records "] = student.NumberOfRecords;
      record["Fail% "] = student.Fails;
      return record;
    }
  }
};
