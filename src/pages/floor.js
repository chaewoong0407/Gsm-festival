import React, { Component } from 'react';
import styled from 'styled-components';
import Header from '../Components/Main/Header';
import './floor.css';
import { Link } from 'react-router-dom';

class floor extends Component {
    render() {
        return(
            <Container>
                <Header/>
                <div class="btn_box">
                    <Link to="/one"><button className="btn_b">1층</button></Link>
                    <Link to="/two"><button className="btn_b">2층</button></Link>
                    <Link to="/three"><button className="btn_b">3층</button></Link>
                    <Link to="/four"><button className="btn_b">4층</button></Link>
                </div>
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

export default floor;