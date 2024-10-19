import React, { useState } from 'react';
import styles from './Contact.module.css';

function Contact() {
  // To handle form submission
  
  return (
    <section className={styles.container}>
      <h1 className='sectionTitle'>Contact</h1>
      <form className='form'>
        <div className={styles.formGroup}>
          <label htmlFor='name' hidden>
            Name
          </label>
          <input type='text' name='name' id='name' placeholder='Name' required />

          <label htmlFor='email' hidden>
            Email
          </label>
          <input type='email' name='email' id='email' placeholder='Email' required />

          <label htmlFor='message' hidden>
            Message
          </label>
          <textarea name='message' id='message' placeholder='Message'></textarea>
        </div>

        <input className='hover btn' type='submit' value='Submit' />
      </form>
    </section>
  );
}

export default Contact;
