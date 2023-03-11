import React from 'react'
import '../stylesFooter.css'

export const Footer = () => {
  return (
    <footer className='footer'>
      <div className='container-image'>
        <img src={'/images/me-card.jpg'} alt='Uriel' />
      </div>

      <div className='container-info'>
        <div className='container-icons-contact'>
          <a href="https://instagram.com/uriel_egl?igshid=ZDdkNTZiNTM="><i className='fa-brands fa-instagram icon'></i></a>
          <a href="https://github.com/v-deVos"><i className='fa-brands fa-github icon'></i></a>
        </div>
        <div className='container-contact'>
          <p>Todos los derechos reservados</p>
          <p>Cel: 412-120-4726</p>
          <p>email: ugalu448@gmail.com</p>
        </div>
      </div>

    </footer>
  )
}
