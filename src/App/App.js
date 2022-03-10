import React, {useState} from 'react'
import Signin from './signin'
import Signup from './signup'
import {Wrapper} from './style'

const App =()=>{
    const [title, setTitle] = useState(true)
    return(
        <Wrapper>
            {
                title ? <Signin/>  : <Signup/>
            }
            {
                title ?<button onClick={()=>setTitle(false)}>Register</button> : <button onClick={()=>setTitle(true)}>kirish</button>
            }            
        </Wrapper>
    )
}

export default App
