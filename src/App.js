import React, { Component } from 'react';
import styled from "styled-components";
import { Route, BrowserRouter } from "react-router-dom";
import { Login, Register, Find, Pass, Join, Main } from 'pages';

class App extends Component {
  render(){
    return(
      <div>
        <BrowserRouter>
        <Container>
          <Route exact path="/" component={Login} />
          <Route path="/Register" component={Register} />
          <Route path="/Find" component={Find} />
          <Route path="/Pass" component={Pass} />
          <Route path="/Join" component={Join} />
          <Route path="/Main" component={Main} />
        </Container>
        </BrowserRouter>
      </div>
    );
  };
}

const Container = styled.div`
   position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #819FF7;
`;
export default App;
