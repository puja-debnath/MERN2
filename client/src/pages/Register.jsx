import { useState } from 'react'

function App() {

  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

 async function Responsejson(event){
  event.preventDefault();
   const data = await fetch("http://localhost:3001/api/Register", {
    method:'POST', 
    headers:{
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      name,
      email,
      password
    }),
   })
   const res = await data.json()
   console.log(res)
}

  return (
    <div>
    <h1>Register</h1>
   <form onSubmit={Responsejson}>
    <input 
    value={name}
    onChange={(e) => setname(e.target.value)} 
    type='text'
    placeholder='name'/>
<br />
<input 
    value={email}
    onChange={(e) => setemail(e.target.value)} 
    type='email'
    placeholder='email'/>
<br />
<input 
    value={password}
    onChange={(e) => setpassword(e.target.value)} 
    type='password'
    placeholder='password'/>
    <br />
    <input type='submit' value='Register' />
   </form>
    </div>
    
  )
}

export default App
