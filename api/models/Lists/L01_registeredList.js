/**
 * Lists/L01_registeredList.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

	identity: 'L01_registeredList',
	tableName: 'L01_registeredList',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,

  attributes: {
  	studid: 	{type: 'string',size: 8,},
  	Last: 		{type: 'string',size: 32,},
  	FIRST: 		{type: 'string',size: 32,},
  	Middle: 	{type: 'string',size: 32,},
  	Homeroom: 	{type: 'string',size: 2,},
  	Sex: 		{type: 'string',size: 1,},
  	Username: 	{type: 'string',size: 9,},
  	repeat: 	{type: 'string',size: 8,},
  	Belizean: 	{type: 'string',size: 1,},
  	DOB: 		{type: 'date',},
  	classes: 	{type: 'string',size: 132,},

	toJSON: function() {
      const list = this.toObject();
      let record = {};
		record["Id "] = list.studid; 
		record["Last "] = list.Last; 
		record["First "] = list.FIRST; 
		record["Middle "] = list.Middle; 
		record["HR "] = list.Homeroom; 
		record["Sex "] = list.Sex; 
		record["UserName "] = list.Username; 
		record["Rep "] = list.repeat; 
		record["Bzn "] = list.Belizean; 
		record["Birth_Date "] = new Date(list.DOB).toISOString().slice(0,10);
		record["Classes "] = list.classes; 
      return record;
    }

  }
};
