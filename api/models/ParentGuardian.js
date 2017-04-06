/**
 * ParentGuardian.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	connection: 'shciServer',

  attributes: {
	  id: {
		type: 'integer', 
        foreignKey: true,
		index: true,
	    unique: true,
	    primaryKey: true,
	    autoIncrement: true,
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
  	  email: {
	  		type: 'string',
	  		email: true,
	  		size: 50,
  	  	},
  	  createKey: {
	  		type: 'string',
	  		size: 35,
  	  	},
      address: {
        collection: 'parentguardian',
        references: 'address',
        on: 'id',
        via: 'id'
//    	virtual: true,
      },
      children: { //One to Many
	      collection: 'Student',
	      via: 'parent',
    },
//       phones: {
//         collection: 'phonelink',
// //        references: '',
//         via: 'ownerId',
//      },  //*/
  }
};

