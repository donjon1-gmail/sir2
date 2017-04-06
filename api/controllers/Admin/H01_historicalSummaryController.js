/**
 * Admin/H01_historicalSummaryController
 *
 * @description :: Server-side logic for managing Admin/h01_historicalsummaries
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'H01_historicalSummary',

historicalsummary: function(req, res, next) {

    // Get an array of all honors
    H01_historicalSummary.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Historical Summary',
        myQuery: records,
      })
    })
  },

	
};
