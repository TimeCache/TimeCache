import express from 'express';
import passport from 'passport';
import pool from '../db';

const router = express.Router();

// LOG IN
router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email']  
  }));
  
router.get('/google/callback', passport.authenticate('google', { failureRedirect: '/login' }),
    (req:any, res) => {
      console.log('logged in!');
      console.log(req.user)

      if (req.user) {
        res.cookie('user', JSON.stringify({ id: req.user.id }), { httpOnly: false });
      }
      res.redirect('/');
    }
  );

//   LOG OUT 
router.post('/logout', (req:any, res) => {
    req.logout();
    req.session.destroy(); 
    res.clearCookie('connect.sid');
    res.clearCookie('connect.sid');
    res.sendStatus(200); 
  });

export default router;
