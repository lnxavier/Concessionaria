import arrow from '../assets/arrow.gif'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title">
        <h1>LX MOTORS</h1>
        <h2>Encontre a moto dos seus sonhos</h2>
      </div>
      <img src={arrow} alt="arrow" />
    </div>
  )
}

export default Hero