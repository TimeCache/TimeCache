import express from 'express';
import pool from '../db';

const router = express.Router();

router.post('/', async (req, res) => {
    // generate a random password
    // send all of the capsule info to the database: 
   
    const capsule = {
        username: req.body.username,
        password: password,
        email: req.body.email,
        phone: req.body.phone,

    }
    
    // send the capsule info to s3 with the id of the capsule as a tag
    // activate the capsule countdown via twillio 

})

router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM timeCapsules');
  res.json(rows);
});


export default router;
