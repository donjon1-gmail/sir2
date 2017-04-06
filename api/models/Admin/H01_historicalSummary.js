/**
 * Admin/H01_historicalSummary.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	identity: 'H01_historicalSummary',
	tableName: 'H01_historicalSummary',
	connection: 'shciServer',
	migrate: 	'safe',
	autoPK: 	false,
	autoCreatedAt:false,
	autoUpdatedAt: false,
  attributes: {
  	Year: 			{	type: 'integer',	},
  	Form1: 			{	type: 'integer',	},
  	Form1_Intake: 	{	type: 'integer',	},
  	Form1_Rep: 		{	type: 'integer',	},
  	Form1_Quits: 	{	type: 'integer',	},
  	Form1_Quit_Rep:	{	type: 'integer',	},
  	Form2: 			{	type: 'integer',	},
  	Form2_Transfer:	{	type: 'integer',	},
  	Form2_Rep: 		{	type: 'integer',	},
  	Form2_Quits: 	{	type: 'integer',	},
  	Form2_Quit_Rep:	{	type: 'integer',	},
  	Form3: 			{	type: 'integer',	},
  	Form3_Transfer:	{	type: 'integer',	},
  	Form3_Rep: 		{	type: 'integer',	},
  	Form3_Quits: 	{	type: 'integer',	},
  	Form3_Quit_Rep:	{	type: 'integer',	},
  	Form4: 			{	type: 'integer',	},
  	Form4_Transfer:	{	type: 'integer',	},
  	Form4_Rep: 		{	type: 'integer',	},
  	Form4_Quits: 	{	type: 'integer',	},
  	Form4_Quit_Rep:	{	type: 'integer',	},
  	Grads: 			{	type: 'integer',	},
  	Total_Pop:		{	type: 'integer',	},

     toJSON: function() {
      const summary = this.toObject();
      let record = {};
		record["Year "] = summary.Year; 
		record["F1 "] = summary.Form1; 
		record["F1 In "] = summary.Form1_Intake; 
		record["F1 Rep "] = summary.Form1_Rep; 
		record["F1 Qts "] = summary.Form1_Quits; 
		record["F1 Qt+Rp "] = summary.Form1_Quit_Rep; 
		record["F2 "] = summary.Form2; 
		record["F2 Tfr "] = summary.Form2_Transfer; 
		record["F2 Rep "] = summary.Form2_Rep; 
		record["F2 Qts "] = summary.Form2_Quits; 
		record["F2 Qt+Rp "] = summary.Form2_Quit_Rep; 
		record["F3 "] = summary.Form3; 
		record["F3 Tfr "] = summary.Form3_Transfer; 
		record["F3 Rep "] = summary.Form3_Rep; 
		record["F3 Qts "] = summary.Form3_Quits; 
		record["F3 Qt+Rp "] = summary.Form3_Quit_Rep; 
		record["F4 "] = summary.Form4; 
		record["F4 Tfr "] = summary.Form4_Transfer; 
		record["F4 Rep "] = summary.Form4_Rep; 
		record["F4 Qts "] = summary.Form4_Quits; 
		record["F4 Qt+Rp "] = summary.Form4_Quit_Rep; 
		record["Grads "] = summary.Grads; 
		record["TotPop "] = summary.Total_Pop; 
      return record;
    }
  }
};

