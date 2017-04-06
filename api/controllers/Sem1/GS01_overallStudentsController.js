/**
 * Sem1/GS01_overallStudentsController
 *
 * @description :: Server-side logic for managing sem1/gs01_overallstudents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'GS01_overallStudents',

	overallStudents: function(req, res, next) {

    GS01_overallStudents.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Overall Students',
        myQuery: records,
      })
    })
  },
	
};

