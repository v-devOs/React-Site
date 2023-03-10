import { skillsDataFrontEnd } from '../../data'

export const FrontEndSkills = () => {
  return (
    <>
      <div className="container-subtitle">
            <h3 className="subtitle secondary">Front-End</h3>
          </div>
          <div className="container-skills">

            {
              skillsDataFrontEnd.map(({ icon, name, link }) => (
                <a href={link} key={name} className="card-container">
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
    </>
  )
}
