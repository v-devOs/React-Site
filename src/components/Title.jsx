import { useScroll } from "../hooks/useScroll"

export const Title = () => {
  const { width } = useScroll();
  return (
    <div
      className="header animate__animated animate__fadeInDown">

      <div className="container-main-title">
        <h1 className="main-title">Hola!, Soy Uriel Galindo</h1>
        <h2>Desarrollador web MERN Stack en proceso</h2>
      </div>

    </div>
  )
}
