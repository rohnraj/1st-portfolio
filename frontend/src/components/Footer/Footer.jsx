import React from 'react'
import styles from './Footer.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
      <p>
        &#169; 2024 Rohan Raj,<br/>
        All rights reserved
      </p>
    </section>
  )
}

export default Footer