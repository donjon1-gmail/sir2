/**
 * Sem1/GS01_performanceAnalysisCourseBasedController
 *
 * @description :: Server-side logic for managing Sem1/gs01_performanceanalysiscoursebaseds
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	identity:'GS01_performanceAnalysisCourseBased',

	coursePerformanceAnalysis: function(req, res, next) {

    GS01_performanceAnalysisCourseBased.find(function (err, data) {
      if (err) return next(err);
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Course Performance Analysis',
        myQuery: records,
      })
    })
  },
};

