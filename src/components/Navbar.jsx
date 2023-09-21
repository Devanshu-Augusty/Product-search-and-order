import { AiOutlineBars } from 'react-icons/ai';
import { BsPersonCircle } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='w-full flex justify-between items-center
    text-white bg-black py-4 px-24 max-md:px-3 sticky top-0 z-10'>
        <div className='flex-1 flex justify-start items-center
        gap-4'>
            <div className='text-3xl 
            cursor-pointer'>
                <AiOutlineBars />
            </div>
            <h2 className='text-3xl cursor-pointer'>
                Products
            </h2>
        </div>
        
        <div className='text-3xl cursor-pointer'>
            <BsPersonCircle />
        </div>
    </div>
  )
}

export default Navbar