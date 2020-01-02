import React, { Component } from 'react';
import './Register.css';
import home from '../img/home.png';
import Student from '../img/Student.png';
import Teacher from '../img/Teacher.png';
import { Link } from 'react-router-dom';

class Register extends Component {
    render(){
        return(
            <div className="box1">
                <div className="Header">
                    <h1 className="h1-Register">회원가입</h1>
                    <Link to="/Main"><img className="home" src={home} alt="홈" /></Link>
                    <hr />
                </div>
                <Link to="/Join"><button type="submit" className="Student"><img src={Student} className="Stu_png" alt="학생가입" /></button></Link>
                <Link to="/Join"><button type="submit" className="Teacher"><img src={Teacher} className="Tea_png" alt="선생가입" /></button></Link>
                <p className="p_1"><span class="aaaa">학생으로</span>가입하기</p>
                <p className="p_2"><span class="aaaa">선생님으로</span>가입하기</p>
                <div className="Log"><span class="aa">*</span>이미 아이디가 있으신가요? <Link to="/" class="color">로그인창으로 돌아가기</Link></div>
            </div>
        );
    };
}

export default Register;