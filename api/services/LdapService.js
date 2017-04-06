var LDAP = require('ldap-client');

// api/services/LdapService.js
module.exports = {
  
  login: (options, callback) => {
    let username = options.username || null;
    sails.log.verbose(username + ' logging in.');
    let userPassword = options.password || null;
    let invalidUsers = ['admin', 'administrator', 'dummie', 'root']
    if((!username) || (!userPassword)){
      callback({success: false, message: 'Invalid Input'});
    } else if (invalidUsers.indexOf(username) != -1) {
      callback({success: false, message: 'Invalid Access'});
    } else {
      var ldap = new LDAP({
          uri:             'ldap://10.0.0.1',   // string
          validatecert:    false,             // Verify server certificate
          connecttimeout:  -1,                // seconds, default is -1 (infinite timeout), connect timeout
          base:            'dc=shc,dc=edu,dc=bz',          // default base for all future searches
          attrs:           '*',               // default attribute list for future searches
          filter:          '(objectClass=*)', // default filter for all future searches
          scope:           LDAP.SUBTREE,      // default scope for all future searches
          connect:         function () {
          }, // optional function to call when connect/reconnect occurs
          disconnect: function () {
          }, // optional function to call when disconnect occurs
      }, function (err) {
        let escapeUID = LDAP.escapefn('dn','uid=%s,ou=Users,dc=shc,dc=edu,dc=bz');
        let userUID = escapeUID(username);
        let userPWD= userPassword;
        
        // perhaps we should check if the account has been disabled
        ldap.bind({
          binddn: userUID,
          password: userPWD
        }, function (err, data) {
          if (err) { // invalid credentials
            callback({success: false, message: 'Invalid Login'});
          } else { 
              callback({success: true, message: 'Successful'});
          }
        })
//                  callback({success: true, message: 'Successfully logged in.'});
      })
    }

  },


}
