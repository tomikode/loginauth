import { Link } from 'react-router-dom'

type Props = {}

// https://www.youtube.com/watch?v=Z5iWr6Srsj8

const Home = (props: Props) => {
  return (
    <div className='flex items-center justify-center'>
      <div className='flex items-center justify-center flex-col bg-white w-11/12 h-[400px] sm:w-[400px] transition-all border-2 shadow-xl text-center'>
        <div className='h-full flex items-center flex-col justify-center'>
          <h1 className='py-5 text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>Auth App</h1>
          <Link to="/login"><button data-cy="login" className='w-52 h-12 rounded-full bg-white hover:bg-transparent hover:text-blue-500 hover:w-56 shadow-lg my-2 border-2 transition-all duration-500'>Login</button></Link>
          <Link to="/register"><button data-cy="register" className='w-52 h-12 rounded-full bg-white hover:bg-transparent hover:text-red-500 hover:w-56 shadow-lg my-2 border-2 transition-all duration-500'>Register</button></Link>
        </div>
      </div>
    </div >
  )
}

export default Home