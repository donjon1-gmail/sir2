/**
 * Bishops/B02_religionByFormController
 *
 * @description :: Server-side logic for managing Bishops/b02_religionbyforms
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'B02_religionByForm',

religionbyform: function(req, res, next) {

    // Get an array of all honors
    B02_religionByForm.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Religion By Sex and Form',
        myQuery: records,
      })
    })
  },

	
};
