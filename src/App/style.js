import styled from 'styled-components'
// import User from '../icons/user.png'
// import {ReactComponents as User} from '../icons/ico.ico'

export const Wrapper = styled.div`
display: flex;
width: 100%;
height: 100vh;
justify-content: center;
align-items: center;
box-sizing: border-box;
`

export const Container = styled.div`
    display: flex;
    width: 355px;
    height: 677px;
    flex-direction: column;
    // border: 1px solid red;
    border-radius: 32px;
    background-color: #222222;
    margin-left: 15px;
    padding: 30px;
    box-sizing: border-box;

`
export const Text = styled.div`
    font-style: unset;
    color: #ffffff;
    font-size: 32px;
    font-weight: 600;
    margin-top: 20px;
`
export const InputWrapper = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;
    margin-top: 25px;
`

export const Input = styled.input`
    height: 50px;
    background-color: rgba(65, 64, 64, 0.5);
    outline: none;
    border-radius: 8px;
    border: none;
    font-size: 16px;
    padding-left: 35px;
    margin-top: 10px;
    color: #ffffff;
`
// export const IconUser = styled(User)`
//     width: 25px;
//     height: 25px;
// `

export const Text2 = styled.div`
    margin-left: auto;
    color: coral;
    font-size: 14px;
    cursor: pointer;
    margin-top: 6px;
`

export const ButtonWrapper = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 35px;
`

export const ButtonWrapperText = styled.div`
    color: #ffffff;
    font-size: 26px;
    font-weight: 600;
`
export const ButtonWrapperButton = styled.button`
    width: 50px;
    height: 50px;
    margin-left: auto;
    border-radius: 50px;
    background-color: #e65400;
    color: #fff;
    box-shadow: 1px 8px  20px #e65400;
    cursor: pointer;
`
export const Text3 = styled.div`
    display: flex;
    justify-content: center;
    font-size: 14px;
    cursor: pointer;
    margin-top: 35px;
    color: #575656;
`
export const Text22 = styled.div`
    display: flex;
    // justify-content: center;
    font-size: 12px;
    cursor: pointer;
    margin-top: 13px;
    color: #575656;
`

