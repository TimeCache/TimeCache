import express from 'express';
import passport from 'passport';
import pool from '../db';

const router = express.Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']  
  }));
  
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/' }),
    (req:any, res) => {
      console.log('logged in!');
      console.log(req.user)

      if (req.user) {
        res.cookie('user', JSON.stringify({ id: req.user.id }), { httpOnly: false });
      }
      res.redirect('/');
    }
  );

export default router;
