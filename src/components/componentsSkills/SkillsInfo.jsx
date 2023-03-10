
export const SkillsInfo = ({title, skills}) => {
  return (
    <>
        <div className="container-subtitle">
          <h3 className="subtitle secondary">{title}</h3>
        </div>
      <div className="skills-info">
        <div className="container-skills">

          {
            skills.map(({ icon, name, link }) => (
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
      </div>
    </>
  )
}
