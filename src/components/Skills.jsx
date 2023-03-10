import { skillsDataFrontEnd } from "../data"
import '../stylesSkills.css'
export const Skills = () => {
  return (
    <>
      <div>
        <h2 className="subtitle primary">Habilidades</h2>
      </div>

      <div id="skills">
        
        <div className="container-subtitles">
          <h3 className="subtitle secondary">Front-End</h3>
        </div>
        <div className="container-skills">

          {
            skillsDataFrontEnd.map(({ icon, name, link }) => (
              <a href={link} className="card-container">
                <div className="card-header">
                  <img src={icon} alt={name} className="card-icon" />
                </div>

                <div className="card-body">
                  <p>{ name }</p>
                </div>
              </a>
            ))
          }
        </div>

      </div>
    </>
  )
}
