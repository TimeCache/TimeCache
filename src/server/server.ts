import express from 'express';
import session from 'express-session';
import cors from 'cors';
import capsuleRoutes from './routes/capsuleRoutes';
import authRoutes from './routes/authRoutes';
import passport from 'passport';
import GoogleStrategy from 'passport-google-oauth20';
import pool from './db';
import dotenv from 'dotenv';
dotenv.config();


// console.log('Google Client ID:', process.env.GOOG_CLIENT_ID);
// console.log('Google Client Secret:', process.env.GOOG_CLIENT_SECRET);
// console.log('Twilio Account SID:', process.env.TWILIO_ACCOUNT_SID);
// console.log('Twilio Auth Token:', process.env.TWILIO_AUTH_TOKEN);
// console.log('Twilio Phone Number:', process.env.TWILIO_PHONE_NUMBER);


const app = express();


app.use(cors());
app.use(express.json());

app.use(session({
    secret: process.env.SESSION_SECRET, // replace with your own secret
    resave: false,
    saveUninitialized: true,
  }));
  
  app.use(passport.initialize());
  app.use(passport.session());
  
  passport.use(new GoogleStrategy({
    clientID: process.env.GOOG_CLIENT_ID,
    clientSecret: process.env.GOOG_CLIENT_SECRET,
    callbackURL: 'http://localhost:8080/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) => {
    const { id, displayName, emails } = profile;
  
    const res = await pool.query(`SELECT * FROM users WHERE googleId = $1`, [id]);
    if (res.rows.length > 0) { // User found
      done(null, res.rows[0]);
    } else { // No user found, create a new one
      const newUser = await pool.query(`INSERT INTO users (googleId, name, email) VALUES ($1, $2, $3) RETURNING *`, [id, displayName, emails[0].value]);
      done(null, newUser.rows[0]);
    }
  }));
  


// "These serialize and deserialize functions are used by Passport to manage session data."
passport.serializeUser((user, done) => {
    // console.log(user) 
    done(null, user.id); 
});

passport.deserializeUser(async (id, done) => {
    const res = await pool.query(`SELECT * FROM users WHERE id = $1`, [id]);
    done(null, res.rows[0]);
});


app.use('/auth', authRoutes);
app.use('/capsules', capsuleRoutes);


const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
