import React from "react";
import { Container, Text, InputWrapper, Input, Text22,Text3, ButtonWrapper, ButtonWrapperText, ButtonWrapperButton } from "./style";

const Signup = () =>{
    return(
        <Container>
            <Text>
                Create an <br /> account
            </Text>
            <InputWrapper>
                <Input placeholder="Username or Email" required='required'></Input>
                {/* <IconUser></IconUser> */}
            </InputWrapper>
            <InputWrapper>
                <Input type="password" placeholder="Password" required='required'></Input>
                {/* <IconUser></IconUser> */}
            </InputWrapper>
            <InputWrapper>
                <Input type="password" placeholder="Confirm Password" required='required'></Input>
                {/* <IconUser></IconUser> */}
            </InputWrapper>
            <Text22>By clicking the Register button, you agree to <br/> the public offer </Text22>
            <ButtonWrapper>
                <ButtonWrapperText>Sign up</ButtonWrapperText>
                {/* <ButtonWrapperButton>{'->'}</ButtonWrapperButton> */}
            </ButtonWrapper>
            <Text3>Sign in with</Text3>
            <Text3>Back</Text3>
        </Container>
    )
}

export default Signup