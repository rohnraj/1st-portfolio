import React from 'react'
import styles from './Projects.module.css'
import ProjectsCard from '../../common/ProjectsCard'
import sortingVisualizer from '../../assets/sorting visualizer logo.png'
import Linka from '../../assets/Linka Logo.png'
import UrbanCart from '../../assets/UrbanCart logo.png'

function Projects() {
  return (
    <section className={styles.container}>
        <h1 className='sectionTitle' id={styles.title}>Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectsCard 
                src={Linka}
                link={"https://github.com/rohnraj/Linka-a-social-media-site-"}
                h3="Linka"
                p="A social Media Site"
            />
            <ProjectsCard 
                src={UrbanCart}
                link={"https://github.com/rohnraj/UrbanCart"}
                h3="Urban Cart"
                p="A E-commerse platform"
            />
            <ProjectsCard 
                src={sortingVisualizer}
                link={"https://github.com/rohnraj/sorting-visualizer"}
                h3="Sorting Visualizer"
                p="Analyse sorting Algorithms"
            />
            {/* <ProjectsCard 
                src={fitlift}
                link={"https://github.com/rohnraj?tab=repositories"}
                h3="Fit Lift"
                p="Fitness app"
            /> */}
        </div>
    </section>
  )
}

export default Projects