import React from 'react';
import './style.css';

//Testimonial images
import T1 from '../../assets/Testimonial1.jpg';
import T2 from '../../assets/Testimonial2.png';
import T3 from '../../assets/Testimonial3.jpg';

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      person: 'John Smith',
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      picture: T1,
    },
    {
      id: 2,
      person: 'Jane Smith',
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      picture: T2,
    },
    {
      id: 3,
      person: 'John Smith',
      review:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      picture: T3,
    },
  ];
  return (
    <div className='Testimonials'>
      <h1 className='headline'>Testimonials</h1>
      {testimonials.map((elem, index) => {
        return index % 2 === 0 ? (
          <div className='testimonial-l' key={index}>
            <div className='testimonial-pic'>
              <img src={elem.picture} alt={elem.picture} />
            </div>
            <div className='testimonial-info'>
              <h2>{elem.person}</h2>
              <h3>{elem.review}</h3>
            </div>
          </div>
        ) : (
          <div className='testimonial-r' key={index}>
            <div className='testimonial-info'>
              <h2>{elem.person}</h2>
              <h3>{elem.review}</h3>
            </div>
            <div className='testimonial-pic'>
              <img src={elem.picture} alt={elem.picture} />
            </div>
          </div>
        );
      })}
    </div>
  );
}
