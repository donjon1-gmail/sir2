/**
 * Sem1/GS01_honorsStudents.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */


module.exports = {
	identity: 'GS01_honorsStudents',
	tableName: 'GS01_honorsStudents',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,

  attributes: {
  	Studid: {
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

  	gpvt: {
  		type: 'decimal',
  		precision: (7,5),
  	},

    toJSON: function() {
      const student = this.toObject();
      let record = {};
      record["Student ID "] = student.Studid;
      record["Last Name "] = student.LName;
      record["First Name "] = student.FName;
      record["Home Room "] = student.HR;
      record["GPV "] = student.gpvt;
      return record;
    }
  }
}

