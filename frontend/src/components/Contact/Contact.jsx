import React, { useState } from 'react';
import styles from './Contact.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault()
    // console.log(name);
    // console.log(email);
    // console.log(message);
    try{

      axios.post('https://1st-portfolio-seven.vercel.app/Thankyou',{name,email,message})
    }
    catch(e){
      console.log("data can't send");
    }
    navigate('/Thankyou'); 
  }

  return (
    <section className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form className='form' onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            placeholder='Name'
            value={name}
            onChange={(e) => setName(e.target.value)} // Update state on change
            required
          />

          <label htmlFor='email' hidden>
            Email
          </label>
          <input
            type='email'
            name='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Update state on change
            required
          />

          <label htmlFor='message' hidden>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            placeholder='Message'
            value={message}
            onChange={(e) => setMessage(e.target.value)} // Update state on change
          ></textarea>
        </div>

        <input className='hover btn' type='submit' value='Submit' />
      </form>
    </section>
  );
}

export default Contact;
