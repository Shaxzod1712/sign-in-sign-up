import React, {useState} from 'react'
import Signin from './signin'
import Signup from './signup'
import {OnClick, Wrapper} from './style'

const App =()=>{
    const [title, setTitle] = useState(true)
    return(
        <Wrapper>
            {
                title ? <Signin/>  : <Signup/>
            }
            {
                title ?<OnClick onClick={()=>setTitle(false)}>Register</OnClick> : <OnClick onClick={()=>setTitle(true)}>kirish</OnClick>
            }            
        </Wrapper>
    )
}

export default App
