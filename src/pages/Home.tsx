import React, {useState} from 'react';
import Login from '../components/login/Login';
import AccessCode from '../components/accessCode/AccessCode';
import UploadPage from './Upload';
import FetchS3 from './FetchS3';
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import axios from 'axios';
import Capsule from './Capsule';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [contactName, setContactName] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [loaded, setLoaded] = useState(false)
  const navigate = useNavigate();

  const handleUploadClick = () => {
    // Handle upload click
  };

  const handleSubscribeClick = () => {
    // Handle subscribe click
    alert(`Subscribed with email: ${email}`);
  };

  const handleContactSubmit = () => {
    // Handle contact form submi
    alert(`Message sent from ${contactName}: ${contactMessage}`);
  };
  const handleAuthReDir = async() => {
    axios.get('http://localhost:3000/auth/google').then(res => {
   
      setLoaded(true)
 
 
    })
    setLoaded(true)
  }

  return (
    <div className="container">
      <header className="header">
        <h1>Welcome to Time Capsule</h1>
      </header>
      
      <main className="main">
      {/* <button onClick={handleAuthReDir}><a href="http://localhost:3000/auth/google">Sign In with Google</a></button> */}
      <a href="http://localhost:3000/auth/google">Sign In with Google</a>
        <button onClick={handleAuthReDir}>SIGN IN WITH GOOGLE </button>
        <h2>Store your memories and retrieve them in the future</h2>
        <p>Our service allows you to upload images and set a date in the future when you want to retrieve them. When that day comes, we'll send you a notification with an access code. Enter the access code in our app to retrieve your image.</p>
        <button onClick={handleUploadClick}>Upload Image</button>

        <h3>Subscribe for updates</h3>
        {/* <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" /> */}
        <button onClick={handleSubscribeClick}>Subscribe</button>

        <h3>Why use Time Capsule?</h3>
        <p>With Time Capsule, you can store your memories securely and retrieve them at a future date of your choice. It's like a digital time capsule for your photos!</p>

        <h3>Meet the team</h3>
        <p>Our team is made up of experienced developers and designers who are passionate about creating meaningful digital experiences. We're dedicated to making Time Capsule the best it can be.</p>

        <h3>Testimonials</h3>
        <p>"I love using Time Capsule! It's a fun and unique way to store my photos." - User A</p>
        <p>"Time Capsule is easy to use and the team is very responsive. Highly recommended!" - User B</p>

        <h3>Contact us</h3>
        <input type="text" value={contactName} onChange={e => setContactName(e.target.value)} placeholder="Your name" />
        <textarea value={contactMessage} onChange={e => setContactMessage(e.target.value)} placeholder="Your message" />
        <button onClick={handleContactSubmit}>Send</button>
      </main>
      <FetchS3/>
      {loaded && <Capsule/>}
 
      <footer className="footer">
        <p>&copy; 2023 Time Capsule</p>
      </footer>
    </div>
  );
};

export default HomePage;