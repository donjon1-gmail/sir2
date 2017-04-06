/**
 * PresentGrades.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
	migrate: 'safe',
	autoPK: false, 
  autoCreateAt: false,
  autoUpdateAt: false,
  	attributes: {
	id: {
		type: 'integer', 
		index: true,
	    unique: true,
	    primaryKey: true,
	    autoIncrement: true,
	},
  	  studentId: {
  	  	model: 'Student',
        foreignKey: true,
  	  	required: true,
	  },
	  classCode: {
	  	model: 'Class_Instructor',
        foreignKey: true,
  	  	required: true,
	  },
	  sem1: {
	  	model: 'GradeScale',
	  	default: 10,
	  },
	  sem2: {
	  	model: 'GradeScale',
	  	default: 10,
	  },
	  exam: {
	  	model: 'GradeScale',
	  	default: 10,
	  },
	  finalGrade: {
	  	model: 'GradeScale',
	  	default: 10,
	  },
	  status: {
	  	model: 'Status',
	  	default: 2,
	  },
	  finalGradeFloat: {
  		type: 'decimal',
  		precision: (7,4),
	  },

  },
};

