import React from 'react'
import styles from './HeroStyle.module.css'
import heroImg from '../../assets/rohan animated main 2.png'
import sunImg from '../../assets/sun.svg'
import moonImg from '../../assets/moon.svg'
import XLogoLight from '../../assets/twitter-light.svg'
import XLogoDark from '../../assets/twitter-dark.svg'
import githubLogoLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLogoLight from '../../assets/linkedin-light.svg'
import linkedinLogoDark from '../../assets/linkedin-dark.svg'
import leetcodelogo from '../../assets/leetcode logo.png'
import cv from '../../assets/My_Resume_latest.pdf'
import { useTheme } from '../../common/ThemeContext'
// import Spline from '@splinetool/react-spline/next';


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
                <h2>Full Stack Developer</h2>
                <span>
                    <a href="https://x.com/rohn_raj" target='_blank'>
                        <img src={xIcon} alt="X logo" />
                    </a>
                    <a href="https://github.com/rohnraj" target='_blank'>
                        <img src={githubIcon} alt="github logo" />
                    </a>
                    <a href="https://www.linkedin.com/in/rohan-raj-54a1601ab/" target='_blank'>
                        <img src={linkedinIcon} alt="Linkedin logo" />
                    </a>
                    <a href="https://leetcode.com/u/Rohnraj/" target='_blank' className={styles.leetcodeLogo}>
                        <img src={leetcodelogo} alt="leetcode logo" />
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