import React, { Component } from 'react';
import home from '../img/home.png';
import './Find_ID.css';
import { Link } from "react-router-dom";

class Find_ID extends Component {  
    render(){
        return(
            <div class="box">
                <h1>ID/PW 찾기</h1>
                <Link to="/Main"><img src={home} className="home1" alt="메인페이지" /></Link>
                <Link to="/Find"><button className="Find_id">아이디</button></Link>
                <Link to="/Pass"><button className="Find_pass">비밀번호</button></Link>
                <span className="text_1">이름</span><input className="name" type="text" placeholder="Name"/>
                <span className="text_2">이메일</span><input className="mail" type="email" placeholder="Email"/>
                <button type="submit" className="idpass">완료</button>
                <div className="Log"><Link to="/" class="color">로그인창으로 돌아가기</Link></div>
            </div>
        );
    };
}

export default Find_ID;