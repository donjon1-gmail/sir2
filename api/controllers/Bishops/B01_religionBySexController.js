/**
 * Bishops/B01_religionBySexController
 *
 * @description :: Server-side logic for managing Bishops/b01_religionbysexes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'B01_religionBySex',

religionbysex: function(req, res, next) {

    // Get an array of all honors
    B01_religionBySex.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Religion By Sex',
        myQuery: records,
      })
    })
  },

	
};

