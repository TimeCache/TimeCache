import React from 'react';
import Login from '../components/login/Login';
import AccessCode from '../components/accessCode/AccessCode';


export default function Home() {
  return (
    <div>
        <h1>Time Capsule</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa officia vitae reiciendis a. Commodi consequuntur eveniet quaerat, et tempora ea autem officiis distinctio voluptatem voluptatibus, est quo ratione, unde possimus!</p>
        <AccessCode />
        <Login />
        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Harum esse qui consequuntur assumenda tenetur impedit at architecto eaque eos, officiis nobis, officia, natus nisi vitae vero iste. Fuga, dolor numquam.</p>
        <h2></h2>
    </div>
  )
}
