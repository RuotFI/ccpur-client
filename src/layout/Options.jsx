import { Link } from 'react-router-dom'
import { LiaUserTieSolid } from "react-icons/lia";
import { FaRupeeSign, FaChalkboardTeacher } from "react-icons/fa";

const Options = () => {
  return (
    <div className='flex items-center gap-6 px-6 justify-center lg:px-28 lg:gap-20 lg:justify-center border-b h-52 overflow-auto'>
      {/* Leadership */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <LiaUserTieSolid className='bg-sky-400 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/our-leadership" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>LEADERSHIP</Link>
      </div>

      {/* Program Fee */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <FaRupeeSign className='bg-blue-950 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/fee-structure" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>PROGRAM FEE</Link>
      </div>

      {/* Programs (UG/PG) */}
      <div className='flex flex-col gap-2 text-gray-600 items-center justify-center text-center hover:underline'>
        <FaChalkboardTeacher className='bg-green-700 w-16 h-16 rounded-full p-4 text-white' />
        <Link to="/undergraduate" className='text-center hover:underline font-medium text-sm whitespace-nowrap'>PROGRAMS</Link>
      </div>
    </div>
  )
}
export default Options
