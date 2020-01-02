import React, { Component } from 'react';
import './Login.css';
import logo from '../img/logo.png';
import study from '../img/study.png';
import { Link } from "react-router-dom";


class Login extends Component {
    render(){
        return( 
            <main className="main">
                <div className="box1">
                    <Link to="/Main"><img src={logo} className="logo" alt="logo" width="250px" height="100px" /></Link>
                    <input className="user" type="text" placeholder="Username"/>
                    <input className="pass" type="password" placeholder="password" />
                    <button className="btn-login">로그인</button>
                    <div className="Join"><span className="aa">*</span>아이디가 없으신가요? <Link to="/Register" className="color">회원가입하기</Link></div>
                    <div className="Find"><span className="aa">*</span>로그인이 안되시나요? <Link to="/Find" className="color">아이디/비밀번호 찾기</Link></div>
                    <img className="study" src={study} alt="책을 보고있는 아이의 이미지"/>
                    </div>
            </main>
        );
    };
}

export default Login;
