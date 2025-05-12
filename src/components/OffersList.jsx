import OffersItem from "./OffersItem"

const OffersList = ({list}) => {
  return (
    <ul className='offers__list'>
      {list.map((motorcyle, index) => {
        return <li className="offers__item-container" key={index}>
          <OffersItem {...motorcyle}/>
        </li>
      })}
    </ul>
  )
}

export default OffersList