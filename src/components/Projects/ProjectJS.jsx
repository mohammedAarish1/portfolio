import React from 'react'
import ProjectCard from '../../components/Card/ProjectCard'
import JSprojects from '../../JSprojects'


const ProjectJS = () => {


    return (
        <>
            {JSprojects?.map((project) => <ProjectCard key={project.id} {...project} />)}


        </>
    )
}

export default ProjectJS
