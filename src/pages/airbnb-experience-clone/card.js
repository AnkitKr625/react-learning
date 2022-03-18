import star from '../../icons/star.svg'

import './card.css'

const Card = (props) => {
  const {badgeText, image, rating, location, price, title, count} = props;
  return (
    <section>
      {/* <div className='badge'>{badgeText}</div> */}
      <img src={image} alt="img" width="176" height="235"/>
      <div>
        <img src={star} alt="star" width="14"/>
        <span>{rating}</span>
        {count && <span> ({count}) .</span>}
        <span>{location}</span>
      </div>
      <div>
        {title}
      </div>
      <div>
        <span>From ${price}/person</span>
      </div>
    </section>
  )
}

export default Card;