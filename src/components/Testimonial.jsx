import {React , useState} from 'react'
import Card from './Card'
import { FiChevronLeft , FiChevronRight} from 'react-icons/fi'



const Testimonial = (props) => {

    let reviews = props.reviews;
    const [index , setIndex] = useState(0);

    function leftShiftHandler(){
        if(index -1 < 0){
            setIndex(reviews.length -1);
        }else{
            setIndex(index -1);
        }
    }

    function rightShiftHandler(){
        if(index +1 >= reviews.length){
            setIndex(0);
        }else{
            setIndex(index+1);
        }
    }

    function surpriseHandler(){
        setIndex(Math.floor(Math.random() * reviews.length));
    }

  return (
    <div className='w-[60vw] md:w[700px] bg-white rounded-md flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl'>
        <Card review={reviews[index]}/>
        <div className='text-violet-400 text-3xl mt-6 gap-3 font-bold'>
            <button onClick={leftShiftHandler} className='hover:text-violet-500'><FiChevronLeft/></button>
            <button onClick={rightShiftHandler} className='hover:text-violet-500'><FiChevronRight/></button>
        </div>

        <div className='mt-4'>
            <button onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-300 px-10 py-2 rounded-md text-white text-lg font-bold'>
                Surprise Me
            </button>
        </div>
    </div>
  )
}

export default Testimonial
