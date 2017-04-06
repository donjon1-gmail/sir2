/**
 * Sem1/GS01_honorsStudentsController
 *
 * @description :: Server-side logic for managing sem1/gs01_honorsstudents
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var pdf = require('html-pdf')
var ejs = require('ejs');
var fs = require("fs");


module.exports = {
	identity:'GS01_honorsStudents',

honorstudents: function(req, res, next) {

    // Get an array of all honors
    GS01_honorsStudents.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
      	return record.toJSON()
      })
      
      res.view('generalreports/semester1/report',{
        title: 'Semester One Honor Students',
        myQuery: records,
      })
    })
  },

   toPdf: function(req,res,next) {
    let file = fs.readFileSync('./pdf-templates/genericreports.ejs', 'utf-8');
    let html = null;

    GS01_honorsStudents.find(function (err, data) {
      if (err) return next(err);
      // pass the array down to the /views/index.ejs page
      let records = data.map(record => {
        return record.toJSON()
      })

      var html = ejs.render(file,{
        title: 'Semester One Honor Students',
        myQuery: records
      })
      var options = { 
        format: 'Letter',
        base: 'file:///home/dummie/sir/assets/',
        border: {
          top: '10mm',
          left: '20mm',
          bottom: '20mm',
          right: '20mm',
        },
        header: {
              "height": "20mm",
        },
        footer: {
          height: "10mm",
          contents: {
            default: '<div style="text-align:center;font-size:xx-small;">Page: <span>{{page}}</span>/<span>{{pages}}</span></div>', // fallback value
          }
        },

      };
   
      pdf.create(html , options).toFile('.tmp/public/pdfreport.pdf', function(err, data) {
        if (err) return console.log(err);
        res.download('.tmp/public/pdfreport.pdf');
      });
    });
  },


};

