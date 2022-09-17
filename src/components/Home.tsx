import { Link } from 'react-router-dom'
import CentreBox from './CentreBox'

type Props = {}

// https://www.youtube.com/watch?v=Z5iWr6Srsj8
//https://docs.cypress.io/guides/references/best-practices#Selecting-Elements
//https://docs.cypress.io/guides/end-to-end-testing/testing-your-app#Step-2-Visit-your-server


const Home = (props: Props) => {

  return (
    <CentreBox>
      <h1 className='py-5 text-4xl font-bold bg-gradient-to-r from-blue-500 to-red-500 bg-clip-text text-transparent'>Auth App</h1>
      <Link to="/login"><button data-cy="login" className='w-52 h-12 rounded-full bg-white hover:bg-transparent hover:text-blue-500 hover:w-56 shadow-lg my-2 border-2 transition-all duration-500'>Login</button></Link>
      <Link to="/register"><button data-cy="register" className='w-52 h-12 rounded-full bg-white hover:bg-transparent hover:text-red-500 hover:w-56 shadow-lg my-2 border-2 transition-all duration-500'>Register</button></Link>
    </CentreBox>
  )
}

export default Home