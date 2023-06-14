import React, {useEffect,useState} from 'react';
import axios from 'axios';
//* Access Code makes a request to S3??

export default function AccessCode() {
  const [data, setData] = useState([])
  const submitAssCode = async () => {
    try {
      const {res}:any = await axios.get('localhost:8080/capsules');
      setData(res);
    } catch (error) {
      console.log("ERROR: ",error)
    }
  }
  return (
    <div>
        <h2>Access Code</h2>
        <input type="text" />
        <button onClick={submitAssCode}>Submit Access Code</button>
    </div>
  )
}
