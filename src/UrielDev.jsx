import { Footer, NavBar } from "./ui"
import './stylesMain.css'
import { Title } from "./components/Title"
import { CardMe } from "./components/CardMe"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"
import { useEffect } from "react"


export const UrielDev = () => {
  // useEffect(() => {
  //   // document.addEventListener('scroll', (event) => {
      

  //   //   if( window.scrollY >= 1100){
  //   //     console.log('Holaaaa');
  //   //   }
  //   // })
  
    
  // }, [])
  
  return (
    <>
      <NavBar/>

      <Title/>

      <CardMe/>

      <Skills/>

      <Projects/>

      <Footer/>
    </>
  )
}
