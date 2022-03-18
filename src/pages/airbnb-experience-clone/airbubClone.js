import NavBAr from './navbar';
import Card from './card';
import CardImg from '../../images/card1.png';

import './airbnb.css'

const Airbnb = () => {
  const cards = [
    {
      title: 'Life lessons with Katie Zaferes',
      rating: '5.0',
      count: 6,
      price: 136,
      location: 'USA',
      image: CardImg,
      badgeText: 'SOLD OUT'
    },
    {
      title: 'Life lessons with Katie Zaferes',
      rating: '5.0',
      count: 6,
      price: 136,
      location: 'USA',
      image: CardImg,
      badgeText: 'SOLD OUT'
    },
    {
      title: 'Life lessons with Katie Zaferes',
      rating: '5.0',
      count: 6,
      price: 136,
      location: 'USA',
      image: CardImg,
      badgeText: 'SOLD OUT'
    },
    {
      title: 'Life lessons with Katie Zaferes',
      rating: '5.0',
      count: 6,
      price: 136,
      location: 'USA',
      image: CardImg,
      badgeText: 'SOLD OUT'
    },
  ];
  return (
    <section className='airbnb'>
      <NavBAr></NavBAr>
      <div className='cards'>
        {
          cards.map((card,i) => {
            return (
              <div 
                key={i}
                className='cards-item'>
                <Card
                  {...card}
                />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default Airbnb