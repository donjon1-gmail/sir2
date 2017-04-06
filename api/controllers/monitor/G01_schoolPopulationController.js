/**
 * G01_schoolPopulationController
 *
 * @description :: Server-side logic for managing G01_schoolpopulations
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 
 function getCSS(Population) {
    let css = '';
    if (Population < 30)
        css = 'good';
    else if(Population >=30 && Population <=34)
        css = 'okeish';
    else
        css = 'bad';
    return css;
}

function getElectivesCSS(Population) {
    let css = '';
    if (Population < 20)
        css = 'good';
    else if(Population >=20 && Population <=25)
        css = 'okeish';
    else
        css = 'bad';
    return css;
}

module.exports = {

  identity: 'G01_schoolPopulation',

  dashboard: function(req, res, next) {
    G01_schoolPopulation.find( (err, G01_schoolPopulationresults) => {
      if (err) return next(err);
    });

    G02_populationQuery.find( (err, G02_populationQueryresults) => {
      if (err) return next(err);
    });

    G03_SIGQuery.find( (err, G03_SIGQueryresults) => {
      if (err) return next(err);
    });

    return G01_schoolPopulation.find().then((G01_schoolPopulationresults) => {
      return G02_populationQuery.find().then((G02_populationQueryresults) => {
        return G03_SIGQuery.find().then((G03_SIGQueryresults) => {
         
          // console.log(G01_schoolPopulationresults);
          // console.log(G02_populationQueryresults);
          // console.log(G03_SIGQueryresults);
          res.view('dashboard',{
            G01_schoolPopulation: G01_schoolPopulationresults,
            //G02_populationQuery: G02_populationQueryresults,
            G02_populationQuery: FormPopulationService.format(G02_populationQueryresults, getCSS),
            G03_SIGQuery: FormPopulationService.format(G03_SIGQueryresults, getElectivesCSS),
            // layout: null
         
          }) //end res.view
        })
      });
    });

  }, //End Function

};