import { projects } from "../data"
import '../stylesProject.css'

export const Projects = () => {
  return (
    <div id="projects">
      <h2 className="subtitle primary">Portafolio</h2>

      <div className="container-projects">
        {
          projects.map( project => (
            <article key={project.name} className="container-project">
              <a className="project" href="">
                <div className="container-project-image">
                  <img className="project-image" src={project.image} alt={project.name} />
                </div>

                <div className="container-project-info">
                  <h2 className="project-name">{project.name}</h2>
                  <p className="tools-used">Herramientas: {project.tools}</p>

                  <p>{project.description}</p>
                  
                </div>
              </a>
            </article>
          ))
        }
      </div>
    </div>
  )
}
