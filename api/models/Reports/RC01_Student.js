/**
 * Reports/RC01_Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	identity: 'RC01_Student',
	tableName: 'RC01_Student',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,

  attributes: {
  	id: 		{type: 'string',size: 8,index: true,unique: true,primaryKey: true,},
  	Last: 		{type: 'string',size: 32,},
  	First: 		{type: 'string',size: 48,},
  	HR: 		{type: 'string',size: 2,},
  	Sponsor: 	{type: 'string',size: 128,},
  	HR_Teacher: {type: 'string',size: 128,},
  	prog: 		{type: 'string',size: 20,},
  	Sem: 		{type: 'integer',},


	toJSON: function() {
      const list = this.toObject();
      let record = {};
		record["Id "] = list.id; 
		record["Last "] = list.Last; 
		record["First "] = list.First.trim(); 
		record["HR "] = list.HR; 
		record["Sponsor "] = list.Sponsor; 
		record["HR_Teacher "] = list.HR_Teacher; 
		record["Program "] = list.prog; 
		record["Sem "] = list.Sem; 
	    return record;
    }

  }
};


/*
	1	id	varchar(8)	utf8_general_ci		No	None	
	2	Last	varchar(20)	utf8_general_ci		Yes	NULL	
	3	First	varchar(41)	utf8_general_ci		Yes	NULL	
	4	HR	varchar(5)	utf8_bin		No		
	5	Sponsor	varchar(152)	utf8_general_ci		Yes	NULL	
	6	HR_Teacher	varchar(132)	utf8_general_ci		Yes	NULL	
	7	prog	varchar(20)	utf8_bin		Yes	NULL	
	8	Sem	int(1)			No	0
*/