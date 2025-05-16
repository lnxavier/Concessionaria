import { Link } from 'react-scroll';

const Header = () => {
  return (
    <div className='header'>
        <nav>
            <ul className="header__menu">
                <li><Link to='hero' smooth={true} duration={500}>INÍCIO</Link></li>
                <li><Link to='about' smooth={true} duration={500}>SOBRE</Link></li>
                <li><Link to='offers' smooth={true} duration={500}>MOTOS</Link></li>
                <li><Link to='contact' smooth={true} duration={500}>CONTATO</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Header