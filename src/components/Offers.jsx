import line from '../assets/line.png';
import { motorcycles } from '../database/motorcyles';
import OffersList from './OffersList';

const Offers = () => {
  return (
    <div className='offers'>
        <div className="title">
            <img className='title-line' src={line} alt="line" />
            <h2>MOTOS</h2>
            <img className='title-line' src={line} alt="line" />
        </div>
        <OffersList list={motorcycles}/>
    </div>
  )
}

export default Offers