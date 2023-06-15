import React from 'react';
import {useLoaderData} from 'react-router-dom';

// THIS SENDS THE ACCESS CODE
// React can now fetch data before with a `loader`  
// randomdog.woof.json
// React Router makes it so that this data will load/render before you even get to the route of this component
// No need for use effect or use state
export default function Viewer() {
  // TEST 
  const dogUrl = useLoaderData() as string;
    
   
  return (
    <div>
        Viewer
        <img src={dogUrl} alt="" />
    </div>
  )
}

export const dataLoader = async () => {
  // TESTING 
    const res = await fetch('https://random.dog/woof.json');
    const dog = await res.json();
    return dog.url;
}

// Import AWS SDK
// const AWS = require('aws-sdk');

// // Configure AWS SDK
// AWS.config.update({
//   region: 'US East (N. Virginia)',
//   accessKeyId: 'AKIA5U6PAIFO627E47SN',
//   secretAccessKey: '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'
// });

// // Create S3 service object
// const s3 = new AWS.S3({apiVersion: '2006-03-01'});

// // Bucket name and key for the file
// const bucketName = 'timecache';
// const keyName = 'your-key-name';

// // File to be uploaded
// const file = 'path-to-your-file';

// // Parameters for S3 upload
// const params = {
//   Bucket: bucketName,
//   Key: keyName,
//   Body: file
// };

// // Call S3 to retrieve upload file to specified bucket
// s3.upload(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } if (data) {
//     console.log("Upload Success", data.Location);
//   }
// });
// // Parameters for S3 get

// // Call S3 to retrieve the file from the specified bucket
// s3.getObject(params, function(err, data) {
//   if (err) {
//     console.log("Error", err);
//   } if (data) {
//     console.log("Download Success", data);
//   }
// });
