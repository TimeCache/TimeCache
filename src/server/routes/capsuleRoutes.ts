import express from 'express';
import pool from '../db';
import { capsuleController } from '../controllers/capsuleController';


const router = express.Router();

router.get('/', capsuleController.getMyCapsule, async (req, res) => { 

})

// create a new time_capsule
router.post('/', capsuleController.generateAccessCode, capsuleController.saveToDatabase, capsuleController.sendToS3, capsuleController.activateCountdown, async (req, res) => {
    // generate a random password
    // send all of the capsule info to the database
    // send the capsule info to s3 with the id of the capsule as a tag
    // activate the capsule countdown via twillio

    // table info needed: 
        // userId INT NOT NULL,
        // capsuleName VARCHAR(255) NOT NULL
        // recipientName VARCHAR(255) NOT NULL,
        // recipientEmail VARCHAR(255) NOT NULL,
        // recipientPhone VARCHAR(15),
        // dueDate TIMESTAMP NOT NULL,
        // inputText VARCHAR(255),
        // accessCode VARCHAR(255) NOT NULL,
        // status VARCHAR(255) DEFAULT 'pending';
        // FOREIGN KEY (userId) REFERENCES users(id)

    res.json({ message: 'Time capsule created!' });
  });

export default router;
