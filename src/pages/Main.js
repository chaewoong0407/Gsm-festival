import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Components/Main/Header';


class Main extends Component {
    render(){
        return(
            <Container>
                <Header/>
            </Container>
        );
    };
}
const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: white;
`;

export default Main;