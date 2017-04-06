/**
 * Sem1/GS01_performanceAnalysisCourseBased.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'GS01_performanceAnalysisCourseBased',
	tableName: 'GS01_performanceAnalysisCourseBased',
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
      const classAnalysis = this.toObject();
      let record = {};
      record["Class "] = classAnalysis.Class;
      record["Instructor "] = classAnalysis.Inst;
      record["Num of Students "] = classAnalysis.Num_Studs;
      record["Passing "] = classAnalysis.Passing;
      record["Honor Roll "] = classAnalysis.Honor_Roll;
      record["Failing "] = classAnalysis.Failing;
      record["F's Count "] = classAnalysis.FCount;
      record["Average "] = classAnalysis.Average;
      record["Standard Deviation "] = classAnalysis.Std_Dev;
      return record;
    }
  }
};
