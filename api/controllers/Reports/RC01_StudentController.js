/**
 * Reports/RC01_StudentController
 *
 * @description :: Server-side logic for managing Reports/rc01_students
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'RC01_Student',

registeredlist: function(req, res, next) {

    // Get an array of all honors
    RC01_Student.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Report Card Header Data',
        myQuery: records,
      })
    })
  },

	
};

