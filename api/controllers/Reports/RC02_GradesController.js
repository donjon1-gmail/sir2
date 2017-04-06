/**
 * Reports/RC02_GradesController
 *
 * @description :: Server-side logic for managing Reports/rc02_grades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'RC02_Grades',

registeredlist: function(req, res, next) {

    // Get an array of all honors
    RC02_Grades.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Report Card Grades Data',
        myQuery: records,
      })
    })
  },

	
};

