const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('../config/keys.js');
const mongoose = require('mongoose');
const User = mongoose.model('users');

passport.serializeUser((user, done) => {
      done(null, user.id);
} );

passport.deserializeUser((id, done) => {
   User.findById(id)
      .then(user => {
         done(null, user);
      });
});



passport.use(
    new GoogleStrategy({
       clientID: keys.googleClientID,
       clientSecret: keys.googleClientSecret,
       callbackURL: '/auth/google/callback'
    }, async (accessToken, refreshToken, profile, done) => {

         const  existingUser = await User.findOne({googleId: profile.id})
               if(existingUser) {
                  // record already exists
                   return done(null, existingUser);
               }            
                  // make a new record
                     const user = await new User({ googleId: profile.id }).save()
                     done(null, user);
            }

    )
 ); 
 