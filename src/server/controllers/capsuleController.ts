import crypto from 'crypto';
const cron = require('node-cron');
const twilio = require('twilio');
import pool from '../db';
require('dotenv').config();


const twilioClient = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

export const capsuleController = {
    getMyCapsule: async (req, res, next) => {
        next();
    },

    generateAccessCode: (req, res, next) => {
        res.locals.accessCode = crypto.randomBytes(16).toString('hex');
        console.log('access code generated!')
        next();
    },
    
    ensureAuthenticated: (req, res, next) => {
        if (req.isAuthenticated()) {
            return next();
        }
        res.status(401).json({ error: "User not authenticated" });
    },
    
    saveToDatabase: async (req, res, next) => {

        // TODO: create a new capsule in the database
        const accessCode = res.locals.accessCode;

        try {
            const userId = req.user.id;  
            console.log("YOOOOO", req.user)
            const { capsuleName, recipientName, recipientPhone, dueDate, inputText } = req.body;
    
            const query = `
              INSERT INTO timeCapsules (userId, capsuleName, recipientName, recipientPhone, dueDate, inputText, accessCode) 
              VALUES ($1, $2, $3, $4, $5, $6, $7) 
              RETURNING *;
            `;
    
            const values = [userId, capsuleName, recipientName, recipientPhone, dueDate, inputText, accessCode];
    
            const { rows } = await pool.query(query, values);
    
            // save the access code in res.locals for the next middleware
            res.locals.capsuleId = rows[0].id;
    
            console.log('new capsule saved to database!')
            next();
    
        } catch (err) {
            next(err);
        }
    },

    sendToS3: async (req, res, next) => {

        // TODO: create a new bucket in S3 with the name of the access code(?)

        console.log('new capsule sent to S3!')
        next();
    },

    activateCountdown: async (req, res, next) => {

        // TODO: create a new capsule in the database
        const { recipientPhone, dueDate, id: capsuleId } = req.body; 

        // set up a cron job
        const task = cron.schedule('0 * * * *', async () => {
          const now = new Date();

          if (now >= new Date(dueDate)) {

            // send the SMS
            await twilioClient.messages.create({
              body: `You've recieved a TimeCache time capsule! Access it with this code: ${req.accessCode}`,
              from: process.env.TWILIO_PHONE_NUMBER,
              to: recipientPhone
            });

            // stop the cron job when the due date has been reached
            task.destroy();  

            // update the status of the capsule in the database
            const updateQuery = 'UPDATE timeCapsules SET status = $1 WHERE id = $2';
            await pool.query(updateQuery, ['sent', capsuleId]);
          }
        }, {
          scheduled: false
        });
        
        task.start();

        console.log('countdown activated!')
        next();
    }

}











