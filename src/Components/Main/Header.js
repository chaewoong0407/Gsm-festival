import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo_white from '../../img/logo_white.png';
import styled from 'styled-components';
import './Header.css';
import show from '../../img/show.png';
import close from '../../img/close-button.png';


class Header extends Component {
    render() {
        return (
            <Head>
            <div class="header">
                    <Link to="/Main"><img className="logos" src={logo_white} width="200px" height="100px" alt="로고"/></Link>
                    <input type="checkbox" id="chk"/>
                    <label for="chk" className="show-menu-btn">
                        <img src={show} alt="쇼"/>
                    </label> 
                    <ul className="menu">
                        <Link to="/Major" className="top">전공 동아리</Link>
                        <Link to="/free">자율 동아리</Link>
                        <Link to="/floor">학교 건물 위치</Link>
                        <Link to="/Main" className="bottom">시간표</Link>
                        <Link to="/Register" className="side">회원가입</Link>
                        <Link to="/" className="side">로그인</Link>
                        <label for="chk" class="hide-menu-btn">
                            <img src={close} alt="쇼"/>
                        </label>
                    </ul>
            </div>
            </Head>
        );
    };
}

const Head = styled.div`
  height: 100px;
  background: #34495e;
  padding: 0 20px;
`;

export default Header;