import { skillsDataFrontEnd } from "../data"
import '../stylesSkills.css'
import { FrontEndSkills } from "./componentsSkills"

export const Skills = () => {
  return (
    <>
      <div>
        <h2 className="subtitle primary">Habilidades</h2>
      </div>

      <div id="skills">
        
        <FrontEndSkills/>

      </div>
    </>
  )
}
