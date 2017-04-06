/**
 * PseGrades.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id:{
      type: 'string', 
      foreignKey: true,
      index: true,
      unique: true,
      primaryKey: true,
      size: 8,
    },
    year:{
    	type: 'integer',
    },
    english:{
    	type: 'integer',
    },
    science:{
    	type: 'integer',
    },
    social:{
    	type: 'integer',
    },
    math:{
    	type: 'integer',
    },
    overall:{
    	type: 'integer',
    },
  }
};

