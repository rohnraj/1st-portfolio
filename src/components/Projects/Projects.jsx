import React from 'react'
import styles from './Projects.module.css'
import viberr from '../../assets/viberr.png'
import ProjectsCard from '../../common/ProjectsCard'
import freshBurger from '../../assets/fresh-burger.png'
import hipssterGlasses from '../../assets/hipsster.png'
import fitlift from '../../assets/fitlift.png'

function Projects() {
  return (
    <section className={styles.container}>
        <h1 className='sectionTitle' id={styles.title}>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectsCard 
                src={viberr}
                link={"https://github.com/rohnraj?tab=repositories"}
                h3="Viberr"
                p="Streaming app"
            />
            <ProjectsCard 
                src={freshBurger}
                link={"https://github.com/rohnraj?tab=repositories"}
                h3="Fresh Burger"
                p="Food Devlivary app"
            />
            <ProjectsCard 
                src={hipssterGlasses}
                link={"https://github.com/rohnraj?tab=repositories"}
                h3="Hipsster Glasses"
                p="Glasses E-commerce app"
            />
            <ProjectsCard 
                src={fitlift}
                link={"https://github.com/rohnraj?tab=repositories"}
                h3="Fit Lift"
                p="Fitness app"
            />
        </div>
    </section>
  )
}

export default Projects