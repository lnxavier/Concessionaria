import { Link } from 'react-scroll'
import arrow from '../assets/arrow.gif'

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__title">
        <h1>LX MOTORS</h1>
        <h2>Encontre a moto dos seus sonhos</h2>
      </div>
      <Link to='about' smooth={true} duration={500}>
        <img src={arrow} alt="arrow" />
      </Link>
    </div>
  )
}

export default Hero