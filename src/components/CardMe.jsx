import '../stylesCardMe.css'
export const CardMe = () => {
  return (
    <>
      <div className="container-card" id='about-me'>
        <h3 className='subtitle item-title-active'>Sobre mi</h3>

          <div className="card">

            <div className="card-description">
              <div className="container-image">
                <img className='card-image' src="/images/me-card.jpg" alt="" />
              </div>

              <div className='card-info'>

                <p>Soy Uriel Emiliano Galindo, estudiante de ingenieria en sistemas computacionales y actualmente
                  tambien semi-desarrollador MERN stack, busco ampliar mis conocimientos en el area de la informatica junto
                  con aprender las herramientas necesarias para el desarrollo full-stack con la libreria de React y sus frameworks
                  ademas tambien de un ligero conocimiento en otros lenguajes de programacion
                </p>
              </div>
            </div>
          </div>
        </div>
    </>

  )
}
