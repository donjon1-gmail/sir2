/**
 * Sem1/GS01_gradeEntryCompletionController
 *
 * @description :: Server-side logic for managing Sem1/gs01_gradeentrycompletions
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity: 'GS01_gradeEntryCompletion',

	gradeEntryCompletion: function(req, res, next) {

    // Get an array of all honors
    GS01_gradeEntryCompletion.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Grade Entry Completion',
        myQuery: records,
      })
    })
  },
};

