/**
 * Sem1/GS01_performanceAnalysisTeacherBased.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'GS01_performanceAnalysisTeacherBased',
	tableName: 'GS01_performanceAnalysisTeacherBased',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,
  attributes: {
  	Class: {
  		type: 'string',
  		size: 6,
  	},
  	Inst: {
  		type: 'string',
  		size: 66,
  	},
  	Num_Studs: {
  		type: 'integer',
  	},
  	Passing: {
  		type: 'integer',
  	},
  	Honor_Roll: {
  		type: 'integer',
  	},
  	Failing: {
  		type: 'integer',
  	},
  	FCount: {
  		type: 'integer',
  	},
  	Average: {
  		type: 'decimal',
  		precision: (7,5),
    },
  	Std_Dev: {
  		type: 'decimal',
  		precision: (7,5),
  	},

    toJSON: function() {
      const teacherAnalysis = this.toObject();
      let record = {};
      record["Class "] = teacherAnalysis.Class;
      record["Instructor "] = teacherAnalysis.Inst;
      record["Num of Students "] = teacherAnalysis.Num_Studs;
      record["Passing "] = teacherAnalysis.Passing;
      record["Honor Roll "] = teacherAnalysis.Honor_Roll;
      record["Failing "] = teacherAnalysis.Failing;
      record["F's Count "] = teacherAnalysis.FCount;
      record["Average "] = teacherAnalysis.Average;
      record["Standard Deviation "] = teacherAnalysis.Std_Dev;
      return record;
    }
  }
};
