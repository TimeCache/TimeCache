import React from 'react';
import Login from '../components/Login';
import AccessCode from '../components/AccessCode';

export default function Home() {
  return (
    <div>
      <h1>Time Capsule</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore delectus porro nihil est sunt fugit ad excepturi voluptatum quae! Vel quos natus neque obcaecati esse, est cupiditate alias numquam molestiae?</p>
      <Login/>
      <AccessCode/>
      <h2>Details</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia illo, dolore perferendis accusantium at explicabo rem id delectus qui eius veritatis! Qui magni numquam dolore ipsum inventore fuga a nihil.</p>
      <h2>About</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti id rerum asperiores itaque alias exercitationem molestiae, at nemo natus possimus repellat nobis suscipit dignissimos laboriosam ipsum eveniet voluptatibus laborum voluptate.</p>
    </div>
  )
}
