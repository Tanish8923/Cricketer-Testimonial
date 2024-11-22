import React from 'react'
import {FaQuoteLeft , FaQuoteRight} from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>

        <div className='absolute top-[5rem] md:top-[-6rem] z-[10] mx-auto'>
            <img src={review.image} alt='pic' className='w-[140px] h-[140px] aspect-square rounded-full z-[25] hidden md:block'></img>
            <div className='w-[140px] h-[140px] bg-violet-500 rounded-full absolute top-[-5px] z-[-10] left-[5px] hidden md:block'></div>
        </div>

        <div className='text-center mt-7'>
            <p className='tracking-wider font-bold capitalize text-2xl'>{review.name}</p>
            <p className='text-violet-300 uppercase text-sm'>{review.job}</p>
        </div>

        <div className='text-violet-400 mx-auto mt-5 '>
            <FaQuoteLeft/>
        </div>

        <div className='text-center mt-4 text-slate-500 '>
            {review.about}
        </div>

        <div className='text-violet-400 mx-auto mt-5 '>
            <FaQuoteRight/>
        </div>

    </div>
  )
}

export default Card
