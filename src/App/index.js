import React, {useState}from "react";
import { Container, Wrapper, Title, Content } from "./style";

function App() {
  const [display, setDisplay] = useState(true)

  // const onTrue=()=>{
  //   setDisplay({
  //     display: true
  //   })
  // }

  // const onFalse=()=>{
  //   setDisplay({
  //     display: false
  //   })
  // }
  return (
    <Wrapper>
      <Title size={'desktop'}>WebBrain Academy</Title>
      <Title size={'tablet'}>WebBrain Academy</Title>
      <Title size={'mobile'}>WebBrain Academy</Title>
      <Content>
        
      <Container display={true}/>
      <Container display={display} light={true}/>
      <button onClick={()=>setDisplay(true)}>True</button>
      <button onClick={()=>setDisplay(false)}>False</button>
      </Content>
    </Wrapper>
  );
}

export default App;
