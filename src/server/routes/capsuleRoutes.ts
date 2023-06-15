import express from 'express';
import pool from '../db';
import { capsuleController } from '../controllers/capsuleController';
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
const fs = require('fs')
const AWS = require('aws-sdk');
// require('dotenv').config()

const accessKeyId = process.env.AWS_ACCESS_KEY_ID
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY
const region = process.env.AWS_REGION


const s3 = new AWS.S3({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey
  }
});



const router = express.Router();
router.get('/', capsuleController.getMyCapsule, async (req, res) => { 
    
})

router.post('/', upload.array('files'), async (req:any, res:any) => {
  const files = req.files;
  const timeCapsuleId = req.body.timeCapsuleId; 
  const fileLinks = [];

  for (let file of files) {
    const fileStream = fs.createReadStream(file.path);

    const params = {
      Bucket: 'timecache',
      Key: file.originalname,
      Body: fileStream,
      ContentType: 'image/jpeg',
    };

    try {
      const data = await s3.upload(params).promise(); // convert callback-based function to promise-based
      fileLinks.push(data.Location); // push the link of the uploaded file to fileLinks array
    } catch(err) {
      console.error('Error uploading file to S3:', err);
      return res.status(500).json({ error: 'Failed to upload file to S3' });
    }
  }

  try {

    const query = 'INSERT INTO timeCapsuleFiles (timeCapsuleId, filesArray) VALUES ($1, $2)';
    const values = [timeCapsuleId, fileLinks];


    await pool.query(query, values);

    res.json({ message: 'Files uploaded successfully', fileLinks: fileLinks });
  } catch (err) {
    console.error('Error storing file links in DB or sending capsule info:', err);
    return res.status(500).json({ error: 'Failed to store file links in DB or send capsule info' });
  }
});
export default router;
