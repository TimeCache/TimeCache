import React from 'react';


export default function Capsule() {
  // some stuff

  function submit(event: any){
    event.preventDefault()
    console.log(event.target.name.value, event.target.setDate.value)
  }

  return (
    <div>
      <div className="flex justify-center">
        <form onSubmit={submit} className="join join-vertical">
          <div className="p-3">
        <label className="font-mono">
            Recipient Name
            <input type="text" id="name" className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
          <label className="font-mono">
            Message
            <input type="text" id="message" className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
          <label className="font-mono">
            Set Date
            <input type="date" id="setDate" className="input input-bordered input-secondary w-full max-w-xs"></input>
          </label>
          </div>
          <div className="p-3">
          <label className="font-mono">
            <input type="file" id="file" className="file-input file-input-bordered file-input-secondary w-full max-w-xs"></input>
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