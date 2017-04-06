/**
 * Staff.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  connection: 'shciServer',

  attributes: {
    id:{
      type: 'string', 
      index: true,
      unique: true,
      primaryKey: true,
      size: 8,
    },
    lastName: {
      type: 'string', 
      size: 32,
    },
    firstName: {
      type: 'string', 
      size: 32,
    },
    middleName: {
     type: 'string', 
      size: 32,
    },
    dob: {
      type: 'date', 
    },
    sex: {
      type: 'string', 
      size: 1,
      enum: ['F','M'],
    },
    religion: {
      model: 'Religion', 
    },
    socialSecurity: {
      type: 'string', 
      size: 16,
    },
    nationality: {
      type: 'string', 
      size: 32,    
    },
    maritalStatus: {
      type: 'string', 
      size: 32,    
    },
    appointDate: {
      type: 'date',
    },
    degree: {
      type: 'string', 
      size: 32,    
    },
    major: {
      type: 'string', 
      size: 32,    
    },
    university: {
      type: 'string', 
      size: 32,    
    },
    payScale: {
      type: 'string', 
      size: 32,    
    },
    experience: {
      type: 'integer',   
    },
    teacherLicense: {
      type: 'string',   
      size: 32,    
    },
    licenseDate: {
     type: 'date',   
   },
    licenseType: {
     type: 'string',    
      size: 32,    
   },
    licenseLevel: {
      type: 'string', 
      size: 32,    
    },
  username: {
      type: 'string', 
      size: 16,    
    },
  teaches: { //One to Many
      collection: 'Class_Instructor',
      via: 'staffId',
    },
  }
};
 
