import React from 'react'
import styles from './HeroStyle.module.css'
import heroImg from '../../assets/hero-img.png'
import sunImg from '../../assets/sun.svg'
import moonImg from '../../assets/moon.svg'
import XLogoLight from '../../assets/twitter-light.svg'
import XLogoDark from '../../assets/twitter-dark.svg'
import githubLogoLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLogoLight from '../../assets/linkedin-light.svg'
import linkedinLogoDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/cv.pdf'
import { useTheme } from '../../common/ThemeContext'

function Hero() {
    const {theme, toggleTheme}=useTheme();
    const themeIcon=theme==='light'?sunImg:moonImg
    const xIcon=theme==='light'?XLogoLight:XLogoDark
    const githubIcon=theme==='light'?githubLogoLight:githubDark
    const linkedinIcon=theme==='light'?linkedinLogoLight:linkedinLogoDark
    
  return (
    <section id='hero' className={styles.container}>
        <div className={`${styles.changeColorMode} ${styles.info}`}>
            <div className={styles.heroimg}>

                <img className={styles.herosImg} 
                    src={heroImg} 
                    alt="Rohan Raj profile photo" 
                />
            <img className={styles.ModeChangeImg}
                src={themeIcon} 
                alt="Dark Mode" 
                onClick={toggleTheme}
            />
            </div>
            <div className={styles.infomation}>

            <h1>Rohan <br/> Raj</h1>
            <h2>MERN Stack Developer</h2>
            <span>
                <a href="http://twitter.com/" target='_blank'>
                    <img src={xIcon} alt="X logo" />
                </a>
                <a href="http://github.com/" target='_blank'>
                    <img src={githubIcon} alt="X logo" />
                </a>
                <a href="http://linkedin.com/" target='_blank'>
                    <img src={linkedinIcon} alt="X logo" />
                </a>
            </span>
            <p className={styles.discription}>With a passion for developing modern React web apps for commercial businesses    
            </p>

            <a href={cv} download>
                <button className='hover' id={styles.btn}>Resume</button>
            </a>
            </div>
        </div>
    </section>
  )
}

export default Hero