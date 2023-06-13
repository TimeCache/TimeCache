import express from 'express';
import pool from '../db';
import { capsuleController } from '../controllers/capsuleController';


const router = express.Router();

router.get('/', capsuleController.getMyCapsule, async (req, res) => { 
    
}

router.post('/', capsuleController.generateAccessCode, capsuleController.saveToDatabase, capsuleController.sendToS3, capsuleController.activateCountdown, async (req, res) => {
    // generate a random password
    // send all of the capsule info to the database
    // send the capsule info to s3 with the id of the capsule as a tag
    // activate the capsule countdown via twillio

    res.json({ message: 'Time capsule created!' });
  });

export default router;
