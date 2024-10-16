import React from 'react'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section className={styles.container}>
        <h1 className='sectionTitle'>Contact</h1>
        <form action="">
            <div className={styles.formGroup}>
                <label htmlFor="name" hidden>
                    Name
                </label>
                <input type="text" name='name' id='name' placeholder='Name' required/>
                <label htmlFor="email" hidden>
                    Email
                </label>
                <input type="text" name="email" id="email" placeholder='Email' required/>
                <label htmlFor="message" hidden>
                    Message
                </label>
                <textarea type="text" name='message' id='message' placeholder='Message'></textarea>
            </div>
            <input className='hover btn' type='submit' value='submit' />
        </form>
    </section>
  )
}

export default Contact