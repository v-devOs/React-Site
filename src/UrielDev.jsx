import { NavBar } from "./ui"
import './stylesMain.css'
import { Title } from "./components/Title"
import { CardMe } from "./components/CardMe"
import { Skills } from "./components/Skills"
import { Projects } from "./components/Projects"

export const UrielDev = () => {
  return (
    <>
      <NavBar/>

      <Title/>

      <CardMe/>

      <Skills/>

      <Projects/>
    </>
  )
}
