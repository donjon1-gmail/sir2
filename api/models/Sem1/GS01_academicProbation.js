/**
 * Sem1/GS01_academicProbation.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'GS01_academicProbation',
	tableName: 'GS01_academicProbation',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,
  attributes: {
  	StudId: {
  		type: 'string',
  		size: 8,
  	},
  	LName: {
  		type: 'string',
  		size: 20,
  	},
  	FName: {
  		type: 'string',
  		size: 41,
  	},
  	HR: {
  		type: 'string',
  		size: 2, 
  	},
  	Hours_Failed: {
  		type: 'decimal',
  		columnName: 'Hours Failed',
  		precision: (7,5),
  	},
  	Classes_Failed: {
  		type: 'text',
  		columnName: 'Classes Failed',
  	},

     toJSON: function() {
      const student = this.toObject();
      let record = {};
      record["Student ID "] = student.StudId;
      record["Last Name "] = student.LName;
      record["First Name "] = student.FName;
      record["Home Room "] = student.HR;
      record["Hours Failed "] = student.Hours_Failed;
      record["Classes Failed "] = student.Classes_Failed;
      return record;
    }
  }
};

