import { useState } from 'react'

function App() {

  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

 async function Loginjson(event){
  event.preventDefault();
   const data = await fetch("http://localhost:3001/api/Login", {
    method:'POST', 
    headers:{
      'Content-Type': "application/json"
    },
    body: JSON.stringify({
      email,
      password
    }),
   })
   console.log("debnath")
   const res = await data.json()
   console.log(res+ "-----")
    if(res.user){
      alert("login successful")
      window.location.href = "./quote"
    }else{
      alert("try again")
    }
  }

  return (
    <div>
    <h1>Login</h1>
   <form onSubmit={Loginjson}>
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
