import React, { ReactNode } from 'react'

type Props = {
    children: ReactNode,
}

const CentreBox = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-[calc(100vh-40px)]'>
    <div className='flex items-center justify-center flex-col bg-white w-11/12 h-[400px] sm:w-[400px] transition-all border-2 shadow-xl text-center'>
      <div className='h-full flex items-center flex-col justify-center'>
        {props.children}
      </div>
    </div>
  </div >
  )
}

export default CentreBox