import React from 'react'
import { Link } from 'react-router-dom'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import './css/Terms.css'



function Terms() {
  return (
        <div className="terms-container">
      <header>
        <h1>Community Guidelines</h1>
      </header>
      <section>
        <h2>To maintain a welcoming environment, we have a set of community guidelines that we kindly ask you to adhere to:</h2>
        <p>
        <b>1.Respectful Language:</b> Please refrain from using profanity, hate speech, or any form of derogatory language. Treat others with kindness and respect in your confessions, comments, and interactions.
<br/>
<br/>
<br/>
<b>2.Confidentiality:</b> While confessions are anonymous, avoid sharing personal information or details that could potentially identify yourself or others.
<br/>
<br/>
<br/>
<b>3.Constructive Discussions:</b> Engage in meaningful discussions by providing constructive feedback, offering support, and sharing your own experiences. Be considerate of different perspectives and opinions.
<br/>
<br/>
<br/>
<b>4.No Bullying or Harassment:</b> Bullying, harassment, or any form of abusive behavior towards others will not be tolerated. We aim to create a safe and inclusive space for everyone.
        </p>
      </section>
      <footer>
        <Link to="/home">
        <KeyboardBackspaceIcon style={{color:'#282c34', cursor:'pointer', fontSize:'40px'}}/>
        </Link>
      </footer>
    </div>
  )
}

export default Terms