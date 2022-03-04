import React from 'react'
import Signin from './signin'
import Signup from './signup'
import {Wrapper} from './style'

const App =()=>{
    return(
        <Wrapper>
            <Signin/>
            <Signup/>
        </Wrapper>
    )
}

export default App
