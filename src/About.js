import React from 'react';
import './css/About.css';
import { Link } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';


function About() {
  return (
    <div className="about-container">
      <header>
        <h1>About Us</h1>
      </header>
      <section>
        <h2>Welcome to Confessopia</h2>
        <p>This is a space where you can anonymously express your thoughts, feelings, and confessions about college life. Whether it's a secret crush, a memorable experience, or a heartfelt message to someone, this platform provides an outlet for you to share and connect with others.
        <br/>
<br/>
We understand that sometimes it's not easy to talk about our feelings, especially when they're about someone we're not supposed to have feelings for. Our website provides a safe and judgment-free space for you to express yourself without fear of repercussions or embarrassment. You can rest assured that your confession will remain anonymous and will not be shared with anyone else.
<br/>
<br/>
Our platform promotes kindness and empathy. We encourage users to share uplifting messages, offer support to one another, and create a positive community where everyone feels heard and understood.
Our mission is to help people relieve themselves of the burden of their secret emotions, as we believe that keeping these feelings bottled up can be detrimental to one's mental and emotional wellbeing. By allowing people to share their secrets with others who can relate, we hope to create a supportive community where people can feel comfortable being vulnerable and honest.
<br/>
<br/>
We believe that everyone deserves to have a place where they can express themselves freely, without fear of judgment or ridicule. Our website is open to people of all genders, ages, and backgrounds, and we encourage everyone to share their thoughts and feelings with us.
Remember, the Confession Page is a place to express yourself, find solace, and connect with a community that understands. We appreciate your cooperation in maintaining a positive atmosphere for everyone.
<br/>
<br/>
Thank you for choosing our website as your platform to share your secret confessions. We hope that you find solace in knowing that you're not alone, and we look forward to hearing from you.</p>
      </section>
      <footer>
        <Link to="/home">
        <KeyboardBackspaceIcon style={{color:'white', cursor:'pointer', fontSize:'40px'}}/>
        </Link>
      </footer>
    </div>
  );
}

export default About;
