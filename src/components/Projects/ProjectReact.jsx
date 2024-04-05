import React from 'react'
import ProjectCard from '../Card/ProjectCard'
import ReactProjects from '../../ReactProjects'

const ProjectReact = () => {

    console.log(ReactProjects)
    return (
        <>
            {ReactProjects?.map((project) => <ProjectCard key={project.id} {...project} />)}


        </>
    )
}

export default ProjectReact;
