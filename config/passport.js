const LocalStrategy = require('passport-local').Strategy;
const userService = require("../services/user");


module.exports = (passport) => {
  // used to serialize the user for the session
  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  // used to deserialize the user
  passport.deserializeUser((id, done) => {
    userService.getUserById(id).then(user => {
      done(null, user)
    });
  });

  passport.use(new LocalStrategy({usernameField: 'email',},(email, password, done) => {
    userService.authenticate(email, password)
        .then(user => done(null, user))
        .catch(message => done(null, false, { message }))
  }));
};