
const OffersItem = ({id, name, state, image, year, brand, model, power, price}) => {
  return (
    <div className='offers__item'>
        <div className='offers__item-title'>
                        <h3>{name}</h3>
                        <p>{state}</p>
                    </div>
                    <img src={image} alt="motorcycle image" />
                    <div className='offers__item-description'>
                        <p>Ano: <span className='offers__item-description--highlight'>{year}</span></p>
                        <p>Modelo: <span className='offers__item-description--highlight'>{model}</span></p>
                        <p>Potência: <span className='offers__item-description--highlight'>{`${power}cv`}</span></p>
                    </div>
                    <div className='offers__item-price'>
                        <p>{`R$${price}`}</p>
                    </div>
                    <button className='offers__item-btn'>Comprar</button>
    </div>
  )
}

export default OffersItem