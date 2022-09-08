import React from 'react'

type Props = {}

const Home = (props: Props) => {
  return (
    <div className='flex items-center justify-center h-screen'>
        <div className='bg-white w-11/12 h-[400px] sm:w-[400px] transition-all border-2 shadow-xl'>
            <h1>Auth App</h1>
        </div>
    </div>
  )
}

export default Home