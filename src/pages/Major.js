import React, { Component } from 'react';
import Header from '../Components/Main/Header';
import Body from '../Components/Jeon/Body';
import styled from 'styled-components';


class Major extends Component {
    render() {
        return(
            <Container>
                <Header />
                <Body />
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

export default Major;