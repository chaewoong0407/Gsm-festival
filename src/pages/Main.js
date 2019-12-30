import React, { Component } from 'react';
import logo_white from '../img/logo_white.png';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import './Main.css';

class Main extends Component {
    render(){
        return(
            <Container>
                <div class="header">
                    <Link to="/Main"><img className="logo2" src={logo_white} width="200px" height="100px" alt="이미지"/></Link>
                    <input type="checkbox" className="chk"/>
                        <label for="chk" className="show-menu-btn">
                            <i className="fas fa-bars"></i>
                        </label>
                <ul class="menu">
                    <Link to="#"><a className="Main_top">동아리</a></Link>
                    <Link to="#"><a>학교 건물 위치</a></Link>
                    <Link to="#"><a className="Main_bottom">시간표</a></Link>
                    <Link to="/Register"><a className="Main_side">회원가입</a></Link>
                    <Link to="/"><a className="Main_side">로그인</a></Link>
                    <label for="chk" className="hide-menu-btn">
                        <i className="fas fa-times"></i>
                    </label>
                   </ul>
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

export default Main;