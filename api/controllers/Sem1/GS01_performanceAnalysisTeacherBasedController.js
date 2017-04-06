/**
 * Sem1/GS01_performanceAnalysisTeacherBasedController
 *
 * @description :: Server-side logic for managing sem1/gs01_performanceanalysisteacherbaseds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	identity:'GS01_performanceAnalysisTeacherBased',

	teacherPerformanceAnalysis: function(req, res, next) {

    GS01_performanceAnalysisTeacherBased.find(function (err, data) {
      if (err) return next(err);
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Teacher Performance Analysis',
        myQuery: records,
      })
    })
  },
	
};

