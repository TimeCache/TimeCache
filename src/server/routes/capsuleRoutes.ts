import express from 'express';
import pool from '../db';
import { capsuleController } from '../controllers/capsuleController';


const router = express.Router();
router.get('/', capsuleController.getMyCapsule, async (req, res) => { 

})

// create a new time_capsule:
    // generate a random password
    // send all of the capsule info to the database
    // send the capsule info to s3 with the id of the capsule as a tag
    // activate the capsule countdown via twillio

router.post('/', capsuleController.generateAccessCode, capsuleController.saveToDatabase, capsuleController.sendToS3, capsuleController.activateCountdown, async (req, res) => {

    console.log('in the middleware for capsule POST', req.body)

    // table info needed: 
        // userId INT NOT NULL,
        // capsuleName VARCHAR(255) NOT NULL
        // recipientName VARCHAR(255) NOT NULL,
        // recipientPhone VARCHAR(15),
        // dueDate TIMESTAMP NOT NULL,
        // inputText VARCHAR(255),

    res.json({ message: 'Time capsule created!' });
  });

export default router;
