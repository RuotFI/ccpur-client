import React from 'react'
import { TbLoader3 } from 'react-icons/tb'
// import loader from "../assets/loader.gif"

const LoaderForReset = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center'>
        <div>
        <TbLoader3 className='animate-spin w-96 h-96' />
        </div>
    </div>
  )
}

export default LoaderForReset