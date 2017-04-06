/**
 * Sem1/GS01_academicProbationController
 *
 * @description :: Server-side logic for managing sem1/gs01_academicprobations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'GS01_academicProbation',

	academicprobation: function(req, res, next) {

    // Get an array of all honors
    GS01_academicProbation.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Academic Probation',
        myQuery: records,
      })
    })
  },
	
};

