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
// router.get('/', capsuleController.getMyCapsule, async (req, res) => { 
    
// })

router.post('/upload', upload.array('files'), (req: any, res: any) => {
  const files = req.files;
  // console.log(files)

  files.forEach((file: any) => {
    // console.log(file)
    const fileStream = fs.createReadStream(file.path)
    // console.log(fileStream)
    const params = {
      Bucket: 'timecache',
      Key: file.originalname,
      Body: fileStream,
      ContentType: 'image/jpeg',
    };

    s3.upload(params, (err: any, data: any) => {
      if (err) {
        console.error('Error uploading file to S3:', err);
        return res.status(500).json({ error: 'Failed to upload file to S3' });
      }
      //TODO: Once finished uploading, store the image to database under the randompassword capsule key
      //TODO: bucket: name of bucket, region: us-east-1, key file.originalname
      //const link = `https://${bucket}.s3.amazonaws.com/${key}`
      //lskjfa;lkejfl:[array of links]
      // console.log('File uploaded to S3:', data.Location);
    });
  });

  res.json({ message: 'Files uploaded successfully' });
});

router.post('/', capsuleController.ensureAuthenticated, capsuleController.generateAccessCode, capsuleController.saveToDatabase, async (req:any, res:any) => {
   res.sendStatus(200)
})

    // generate a random password
    // send all of the capsule info to the database
    // send the capsule info to s3 with the id of the capsule as a tag
    // activate the capsule countdown via twillio

export default router;
