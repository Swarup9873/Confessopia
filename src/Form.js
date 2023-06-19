import React from 'react';
import { useForm } from 'react-hook-form';
import db from './firebase';
import './css/Form.css'
import firebase from 'firebase/compat/app';




const ConfessionForm = () => {
  
  const { register, handleSubmit, formState: { errors }, reset } = useForm();


  const onSubmit = (data) => {
    console.log('You typed >>>', data.collegeName, data.confession);
  
    db.collection('confession')
      .add({
        college: data.collegeName,
        message: data.confession,
        date: firebase.firestore.FieldValue.serverTimestamp(),
        likes:0,
        liked:false,
      })
      .then(() => {
        reset();
      })
      .catch((error) => {
        console.error("Error sending message: ", error);
      });
  };
  

  
  return (
    <form className='form-container' onSubmit={handleSubmit(onSubmit)}>
      <div className='confession-college'>
        <input
          placeholder='Enter College Name'
          type="text"
          id="collegeName"
          {...register('collegeName', { required: 'College name is required' })}
        />
        {errors.collegeName && <p>{errors.collegeName.message}</p>}
      </div>

      <div className='confession-instructions'>
        <a>Please refrain from using profanity, hate speech, or any form of derogatory language. Treat others with kindness and respect in your confessions, comments, and interactions.
Use <b>ctrl + b</b>, <b>ctrl + i</b>, <b>ctrl + u</b> to bold, italicize, and underline text.
</a>
        
      </div>
      <div >
        <label htmlFor="confession">Confession:</label>
        <textarea
          placeholder={`Hey xyz,
I want to make a confession



 with love`}

          className='confession-text'
          id="confession"
          {...register('confession', { required: 'Confession is required' })}
        ></textarea>
        {errors.confession && <p>{errors.confession.message}</p>}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ConfessionForm;
