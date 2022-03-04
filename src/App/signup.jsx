import React from "react";
import { Container, Text, InputWrapper, Input, Text22,Text3, ButtonWrapper, ButtonWrapperText, ButtonWrapperButton } from "./style";

const Signup = () =>{
    return(
        <Container>
            <Text>
                Create an <br /> account
            </Text>
            <InputWrapper>
                <Input placeholder="Username or Email" ></Input>
                {/* <IconUser></IconUser> */}
            </InputWrapper>
            <InputWrapper>
                <Input placeholder="Password" ></Input>
                {/* <IconUser></IconUser> */}
            </InputWrapper>
            <InputWrapper>
                <Input placeholder="Confirm Password" ></Input>
                {/* <IconUser></IconUser> */}
            </InputWrapper>
            <Text22>By clicking the Register button, you agree to <br/> the public offer </Text22>
            <ButtonWrapper>
                <ButtonWrapperText>Sign in</ButtonWrapperText>
                <ButtonWrapperButton>></ButtonWrapperButton>
            </ButtonWrapper>
            <Text3>Sign in with</Text3>
            <Text3>Back</Text3>
        </Container>
    )
}

export default Signup