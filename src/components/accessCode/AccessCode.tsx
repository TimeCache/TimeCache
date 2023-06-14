import React from 'react'

//* Access Code makes a request to S3??

export default function AccessCode() {
  const submitAssCode = () => {
    console.log('heheheh');
  }
  return (
    <div>
        <h2>Access Code</h2>
        <input type="text" />
        <button onClick={submitAssCode}>Submit Access Code</button>
    </div>
  )
}
