import crypto from 'crypto';
const pool = require('./db');
const cron = require('node-cron');
const twilio = require('twilio');
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
    
    saveToDatabase: async (req, res, next) => {
        console.log('new capsule saved to database!')
        next();
    },

    sendToS3: async (req, res, next) => {
        console.log('new capsule sent to S3!')
        next();
    },

    activateCountdown: async (req, res, next) => {
        console.log('countdown activated!')
        next();
      }

}









