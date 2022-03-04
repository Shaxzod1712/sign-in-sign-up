import React from "react";
import { Container, Text, InputWrapper, Input, Text2,Text3, ButtonWrapper, ButtonWrapperText, ButtonWrapperButton } from "./style";

const Signin = () =>{
    return(
        <Container>
            <Text>
                Welcome <br /> Back!
            </Text>
            <InputWrapper>
                <Input placeholder="Username or Email" ></Input>
                {/* <IconUser></IconUser> */}
            </InputWrapper>
            <InputWrapper>
                <Input placeholder="Password" ></Input>
                {/* <IconUser></IconUser> */}
            </InputWrapper>
            <Text2>Forget Password?</Text2>
            <ButtonWrapper>
                <ButtonWrapperText>Sign in</ButtonWrapperText>
                <ButtonWrapperButton>></ButtonWrapperButton>
            </ButtonWrapper>
            <Text3>Sign in with</Text3>
            <Text3>Back</Text3>
        </Container>
    )
}

export default Signin