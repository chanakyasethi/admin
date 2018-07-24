
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../models/user');
const config = require('../config/config');
const request = require('request');
var userRoute = config.USER_SERVICE_PORT + '/user/';

module.exports = function (passport) {

  let opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: config.JWT_SECRET
  };
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      request.post(
        {
          url: userRoute + 'tokenCheck',
          headers: {
            app: 'admin'
          },
          body: { id: jwt_payload.data._id },
          json: true
        },
        function (err, response) {
          if (err) {
            return done(err, false);
          } else {
            if (!response.body || response.body === {}) {
              return done(null, false);
            } else {
              return done(null, response.body);
            }
          }
        }
      );
    }
    ))
}




