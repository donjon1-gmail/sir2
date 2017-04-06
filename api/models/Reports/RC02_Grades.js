/**
 * Reports/RC02_Grades.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'rc02_grades',
	tableName: 'RC02_Grades',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,

  attributes: {
  	id: 	{type: 'string',size: 8,index: true,unique: false,primaryKey: false,columnName:"studentId",},
  	name: 		{type: 'string',size:255,},
  	hours: 		{type: 'integer',},
  	singleSem: 	{type: 'integer',},
  	classCode: 	{type: 'string',size: 6,},
  	Sem1: 		{type: 'string',size: 2,},
  	Sem2: 		{type: 'string',size: 2,},
  	Final: 		{type: 'string',size: 2,},
  	value: 		{type: 'decimal',precision: (7,5),},

	toJSON: function() {
      const list = this.toObject();
      let record = {};
		record["id "] = list.id; 
		record["ClassName "] = list.name; 
		record["Hours "] = list.hours; 
		record["singleSem "] = list.singleSem; 
		record["ClassCode "] = list.classCode; 
		record["Sem1 "] = list.Sem1; 
		record["Sem2 "] = list.Sem2; 
		record["Final "] = list.Final; 
		record["HR_Teacher "] = list.HR_Teacher; 
		record["value "] = list.value; 
      return record;
    }


  }
};

/*
	1	studentId	varchar(8)	utf8_general_ci		No		
	2	name	varchar(255)	utf8_general_ci		Yes	NULL	
	3	hours	int(11)			Yes	NULL	
	4	classCode	varchar(6)	utf8_general_ci		No		
	5	Sem1	varchar(2)	utf8_general_ci		Yes	NULL	
	6	Sem2	varchar(2)	utf8_general_ci		Yes	NULL	
	7	Final	varchar(2)	utf8_general_ci		Yes	NULL	
	8	value	decimal(7,4)			Yes	NULL	
	9	Teacher	varchar(66)	utf8_general_ci		Yes	NULL	

*/