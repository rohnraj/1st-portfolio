import React from 'react'
import styles from './Skills.module.css'
import SkillsList from '../../common/SkillsList'
import checkMarkIconDark from '../../assets/checkmark-dark.svg'
import checkMarkIconLight from '../../assets/checkmark-light.svg'
import { useTheme } from '../../common/ThemeContext'

function Skills() {
    const {theme, toggleTheme}=useTheme();
    const checkMarkIcon=theme==='light'?checkMarkIconLight:checkMarkIconDark
  return (
    <section className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="HTML"/>
            <SkillsList src={checkMarkIcon} skill="CSS"/>
            <SkillsList src={checkMarkIcon} skill="JavaScript"/>
            <SkillsList src={checkMarkIcon} skill="Nodejs"/>
            
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="React"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="Redux"/>
            <SkillsList src={checkMarkIcon} skill="Vite"/>
            <SkillsList src={checkMarkIcon} skill="git"/>
            <SkillsList src={checkMarkIcon} skill="BootStrap"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="MongoDB"/>
            <SkillsList src={checkMarkIcon} skill="MySQL"/>
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillsList src={checkMarkIcon} skill="C++"/>
            <SkillsList src={checkMarkIcon} skill="Data Structure & Algorithms"/>
        </div>
    </section>
  )
}

export default Skills