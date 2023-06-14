import React from 'react'
import { useState } from "react";
import './styles/index.css'

export default function Capsule() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  // some stuff

  const handleFileChange = (event: any) => {

    setSelectedFiles([...event.target.files]);
    console.log(selectedFiles)
  };

  function submit(event: any){
    const formData = new FormData(event.target);
    event.preventDefault()
    const uploadData = new FormData()

    const capsuleData = {}
    for (const value of formData.entries()) {
      if (value[0] !== 'file') {
        capsuleData[value[0]] = value[1]
      } 
    }

    selectedFiles.forEach((file) => {
      uploadData.append('files', file);
    });




    fetch('/capsules', {
      method: 'POST',
      body: uploadData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error uploading files:', error);
      });
    // console.log(event.target.name.value, event.target.setDate.value)
  }

  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={submit} className="join join-vertical">
          <div className="p-3">
        <label className="font-mono">
            Capsule Name
            <input type="text" name="capsuleName" className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
        <label className="font-mono">
            Recipient Name
            <input type="text" name="recipientName" className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
        <label className="font-mono">
          Recipient Phone
            <input type="tel" name="recipientPhone" className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
          <label className="font-mono">
            Message
            <input type="text" name="message" className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
          <label className="font-mono">
            Set Date
            <input type="date" name="dueDate" className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
          <label className="font-mono">
            <input type="file" multiple name="file" onChange={handleFileChange} className="file-input file-input-bordered file-input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
            <input type="submit" value="Create New Capsule" className="btn btn-outline btn-secondary">
            </input>
          </div>
        </form>
      </div>
    </div>
  )
}