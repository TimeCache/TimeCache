import express from 'express';
import passport from 'passport';
import pool from '../db';

const router = express.Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']  
  }));
  
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    (req, res) => {
      console.log('logged in!');
      // res.redirect('back');
     
      res.redirect('/')
    }
  );


export default router;
