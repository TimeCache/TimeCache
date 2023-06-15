import React,{useState,useEffect} from 'react'
import AWS from 'aws-sdk';
import { S3Client,  } from "@aws-sdk/client-s3";



export default function FetchS3() {
    const [images, setImages]  = useState([]);
    useEffect( () => {
        
    }, [])
    const getImages = async() => {
        console.log('heyo')
        const res:any = await s3.getObject({
            Bucket: 'testcache',
            Key:'AKIA5U6PAIFO627E47SN'
          });
          setImages([res])
    }
    
return (
    <div>
        <h2>Enter Access Code</h2>
        <input type="text" />
        <button onClick={getImages}>Submit</button>
        
    </div>
  )
}

// Configure AWS SDK
AWS.config.update({
  region: 'us-east-1',
  accessKeyId: 'AKIA5U6PAIFO627E47SN',
  secretAccessKey: '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'
});

// Create S3 service object
const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// Bucket name and key for the file
const bucketName = 'your-bucket-name';
const keyName = 'your-key-name';

// File to be uploaded
const file = 'path-to-your-file';

// Parameters for S3 upload
const params = {
  Bucket: bucketName,
  Key: keyName,
  Body: file
};

// Call S3 to retrieve upload file to specified bucket
s3.upload(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Upload Success", data.Location);
  }
});
// Parameters for S3 get

// Call S3 to retrieve the file from the specified bucket
s3.getObject(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } if (data) {
    console.log("Download Success", data);
  }
});
