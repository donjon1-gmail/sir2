/**
 * LdapuserController
 *
 * @description :: Server-side logic for managing ldapusers
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// changeUserPassword: (request, response) => {
	// 	let options = {};
	// 	options.username = request.param('username') || null;
	// 	options.oldPassword = request.param('oldPassword') || null;
	// 	options.newPassword = request.param('newPassword') || null;
	// 	options.newPassword2 = request.param('newPassword2') || null;

	// 	LdapService.changeUserPassword(options, (result) => {
	// 		response.json(result);
	// 	});
	// },

	'new': function(req, res) {
		res.view('/login');
	},


	login: (request, response) =>{
		let options ={};
		options.username = request.param('username') || null;
		options.password = request.param('lpassword') || null;

		LdapService.login(options,(result) => {
			response.json(result);
			 if(result.success === true) {
			 	var oldDateObj = new Date(); //gets current time
			 	var newDateObj = new Date(oldDateObj.getTime()+ 600000); //takes current time and adds number for future expiry date of session
			 	request.session.cookie.expires = newDateObj; // expiry time of session
			 	request.session.User = options.username;
				request.session.authenticated = true; // session has been authenticated
				request.session.save(); //save session
			  //response.redirect('/dashboard'); //Did not work here due to "PUT" in login form
			   // console.log(request.session); //Logs session to console
	       	} // end if

			
		})
	}, 


	destroy: function(req, res, next) {

		req.session.destroy();
		res.redirect('/login');
	}

};



