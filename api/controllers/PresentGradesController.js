/**
 * PresentGradesController
 *
 * @description :: Server-side logic for managing Presentgrades
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	  beforeValidation : function(presentgrades,cb) {
        presentgrades.idx = presentgrades.studentId+presentgrades.classCode;
        cb();
    }

};

