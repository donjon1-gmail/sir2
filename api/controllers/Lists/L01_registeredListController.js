/**
 * Lists/L01_registeredListController
 *
 * @description :: Server-side logic for managing Lists/l01_registeredlists
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'L01_registeredList',

registeredlist: function(req, res, next) {

    // Get an array of all honors
    L01_registeredList.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Registered List',
        myQuery: records,
      })
    })
  },

	
};
