import { ChangeEvent, useState } from 'react'
import CentreBox from './CentreBox'

type Props = {}

const Register = (props: Props) => {

  const numbers = `1234567890`

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");



  const regiterSubmit = () => {

  }

  const nameChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name: String = event.target.value
    if (name.trim() === "") {
      setNameError("Please enter a name")
    } else {
      setNameError("")
    }
  }

  const emailChange = (event: ChangeEvent<HTMLInputElement>) => {
    const email: String = event.target.value
    const atSign = email.indexOf('@')
    const dotSign = email.indexOf('.', atSign)
    if (atSign === -1 || dotSign === -1){
      setEmailError("Not valid email address")
    } else{
      setEmailError("")
    }
  }

  const passwordChange = (event: ChangeEvent<HTMLInputElement>) => {
    const password: String = event.target.value
    let error = ""
    let upper = false, lower = false, number = false, eight = false;
    for (let i = 0; i < password.length; i++){
      const c = password[i]
      if (!upper && c === c.toUpperCase())
        upper = true
      else if (!lower && c === c.toLowerCase())
        lower = true
      else if (!number && numbers.includes(c))
        number = true
    }
    if (password.length < 8)
      error += "Password must be at least 8 characters long\n"
    if (!upper)
      error += "Password must contain at least 1 capital letter\n"
    if (!lower)
      error += "Password must contain at least 1 lowercase letter\n"
    if (!number)
      error += "Password must contain at least 1 number\n"
    setPasswordError(error)
  }

  return (
    <CentreBox>
      <h1>Register</h1>
      <form className='flex flex-col'>
        <input data-cy="name" onChange={nameChange} name="name" type="text" className="bg-red-400"></input>
        <div data-cy="nameError">{nameError}</div>
        <input data-cy="email" onChange={emailChange} name="email" type="email" className="bg-red-400"></input>
        <div data-cy="emailError">{emailError}</div>
        <input data-cy="password" onChange={passwordChange} name="password" type="password" className="bg-red-400"></input>
        <div data-cy="passwordError"><pre>{passwordError}</pre></div>
        <input type="submit" value="Register" />
      </form>
    </CentreBox>
  )
}

export default Register

//form with name, email, password
//check all exist
//check email has @ sign followed by .
//check password has one capital, one small, one special char, 8 letters min
//enable register button