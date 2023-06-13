import express from 'express';
import pool from '../db';

const router = express.Router();

router.post('/', async (req, res) => {
    // generate a random password
    // send all of the capsule info to the database: 

            //      userId INT NOT NULL,
            //      recipientName VARCHAR(255) NOT NULL,
            //      recipientEmail VARCHAR(255) NOT NULL,
            //      recipientPhone VARCHAR(15),
            //      dueDate TIMESTAMP NOT NULL,
            //      inputText
            //      accessCode 

    // send the capsule info to s3 with the id of the capsule as a tag
    // activate the capsule countdown via twillio 

})

router.get('/', async (req, res) => {
  const { rows } = await pool.query('SELECT * FROM timeCapsules');
  res.json(rows);
});


export default router;
