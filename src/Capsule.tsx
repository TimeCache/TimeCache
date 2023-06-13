import React = require("react")
import './index.css'

export default function Capsule() {
  // some stuff

  return (
    <div>
      <div>
        <form>
        <label>
            Recipient Name
            <input type="text" name="name"></input>
          </label>
          <label>
            Message
            <input type="text" name="message"></input>
          </label>
          <label>
            Set Date
            <input type="date" name="setDate"></input>
          </label>
          <label>
            Upload
            <input type="file" name="file"></input>
          </label>
            {/* <input type="submit" value="Create New Capsule" className="btn btn-outline btn-secondary"></input> */}
            <button className="btn btn-outline">Default</button>
        </form>
      </div>
    </div>
  )
}