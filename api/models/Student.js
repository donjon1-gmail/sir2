/**
 * Student.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'shciServer',

  attributes: {
	  id:{
      type: 'string', 
      foreignKey: true,
      index: true,
      unique: true,
      primaryKey: true,
      size: 8, 
	  },
	  lastName:{
	  		type: 'string',
	  		size: 20,
	  },
  	  firstName:{
  	  		type: 'string',
	  		size: 20,
	  },
	  middleName:{
	  		type: 'string',
	  		size: 20,
	  },
  	  sex:{
      		type: 'string', 
      		size: 1,
      		enum: ['F','M'],
      },
	  status:{
      		model: 'Status', 
	  },
  	  parent:{
      		model: 'ParentGuardian', 
	  },
  	  dob:{
  	  		type: 'date',
  	  },
  	  userName:{
	  	  	type: 'string',
	  	  	unique: true,
	  	  	index: true,
	  	  	size: 9,  
  	  },
  	  religion: {
      		model: 'Religion', 
      },
  	  sponsor:{
  	  		model: 'Sponsor',
  	  },
  	  prevSchool:{
  	  		model: 'School',
  	  },
  	  maidenName:{
	  		type: 'string',
	  		size: 50,
  	  },
  	  repeat:{
  	  		type: 'boolean',
  	  		defaultsTo : false,
  	  },
      address: { // One to One::note foreignKey above
        collection: 'student',
        references: 'address',
        on: 'id',
        via: 'id'
      },
      psegrades: {
        collection: 'student',
        references: 'psegrades',
        on: 'id',
        via: 'id'
      },
      grades: {
        collection: 'presentgrades',
        via: 'studentId',
      },
//       phones: {
//         collection: 'phonelink',
// //        references: '',
//         via: 'ownerId',
//      },  //*/
   }
};

