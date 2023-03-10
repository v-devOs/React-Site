import { skills } from '../data'
import '../stylesSkills.css'
import { SkillsInfo } from './componentsSkills/SkillsInfo'

export const Skills = () => {
  return (
    <>
      <div id='skills'>
        <h2 className="subtitle primary">Habilidades</h2>
      </div>

      <div className="skills">
        
        {
          skills.map( ({area, skills}) => (
            <SkillsInfo key={area} title={area} skills={skills}/>
          ))
        }

      </div>
    </>
  )
}
