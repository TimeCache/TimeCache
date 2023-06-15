import React = require("react")
import { useState } from "react";
import './styles/index.css'

export default function Capsule() {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [formState, setFormState] = useState({
    capsuleName: '',
    recipientName: '',
    recipientPhone: '',
    message: '',
    dueDate: ''
  })


  const handleFileChange = (event: any) => {

    setSelectedFiles([...event.target.files]);
    console.log("selectedFiles", selectedFiles)
  };

  async function submit(event: any){
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

    for (const value of formData.entries()) {
      if (value[0] !== 'file') {
        capsuleData[value[0]] = value[1]
      }
    }

    try {
      await fetch('/capsules', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(capsuleData)
      })

      setFormState({
        capsuleName: '',
        recipientName: '',
        recipientPhone: '',
        message: '',
        dueDate: ''
      });


    } catch(error) {
      console.log(`${error} in the POST for capsules`)
    }


    fetch('/capsules/upload', {
      method: 'POST',
      body: uploadData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data", data);
      })
      .catch((error) => {
        console.error('Error uploading files:', error);
      });
  }

  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={submit} className="join join-vertical">
          <div className="p-3">
        <label className="font-mono">
            Capsule Name
            <input type="text" name="capsuleName" value={formState.capsuleName} onChange={(event) => setFormState({ ...formState, capsuleName: event.target.value })} className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
        <label className="font-mono">
            Recipient Name
            <input type="text" name="recipientName" value={formState.recipientName} onChange={(event) => setFormState({ ...formState, recipientName: event.target.value })} className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
        <label className="font-mono">
          Recipient Phone
            <input type="tel" name="recipientPhone" value={formState.recipientPhone} onChange={(event) => setFormState({ ...formState, recipientPhone: event.target.value })} className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
          <label className="font-mono">
            Message
            <input type="text" name="message" value={formState.message} onChange={(event) => setFormState({ ...formState, message: event.target.value })} className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
          <label className="font-mono">
            Set Date
            <input type="date" name="dueDate" value={formState.dueDate} onChange={(event) => setFormState({ ...formState, dueDate: event.target.value })} className="input input-bordered input-secondary w-full max-w-xs"></input>
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