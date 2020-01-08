import React, { Component } from 'react';
import './Login.css';
import logo from '../img/logo.png';
import study from '../img/study.png';
import { Link, Redirect } from "react-router-dom";
import axios from 'axios';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pw: '',
            isRedirect: false
        };
        this.textnull = this.textnull.bind(this);
    }

    
    handleId = e => {
        this.setState({ id: e.target.value });
    }
    handlepw = e => {
        this.setState({ pw: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();
        this.textnull();
    };
    textnull = () => {
        let idError = "";
        let pwError = "";
        if(this.state.id.length<1){
            idError = "아이디를 입력하세요";
            this.setState({ idError });
            pwError = "";
            this.setState({ pwError });
            return false;
        } else if(this.state.pw.length<1) {
            idError = "";
            this.setState({ idError });
            pwError = "비밀번호를 입력하세요";
            this.setState({ pwError });
            return true;
        } else {
        axios.get('http://localhost:4000/login', {
            params: { id: this.state.id, pass: this.state.pw }
        }).then(response => {
            console.log(response.data)
            if (response.data === "success") {
                alert("로그인 성공");
                this.setState({ isRedirect: true });
            } else if (response.data === "fail") {
                alert("아이디나 비밀번호가 알맞지 않습니다. ");
                return false;
            }
        });
      }
    }

    render(){
        if (this.state.isRedirect) {
            return <Redirect to="/Main" />
        }
        return( 
            <main className="main">
                <div className="box1">
                    <form onSubmit={this.onSubmit}>
                    <Link to="/Main"><img src={logo} className="logo" alt="logo" width="250px" height="100px" /></Link>
                    <input className="user" type="text" placeholder="Username" value={this.state.id} onChange={this.handleId}/>
                    <div className="idE">{this.state.idError}</div>
                    <input className="pass" type="password" placeholder="password" value={this.state.pw} onChange={this.handlepw}/>
                    <div className="idP">{this.state.pwError}</div>
                    <button className="btn-login">로그인</button>
                    <div className="Join"><span className="aa">*</span>아이디가 없으신가요? <Link to="/Register" className="color">회원가입하기</Link></div>
                    <div className="Find"><span className="aa">*</span>로그인이 안되시나요? <Link to="/Find" className="color">아이디/비밀번호 찾기</Link></div>
                    <img className="study" src={study} alt="책을 보고있는 아이의 이미지"/>
                    </form>
                    </div>
            </main>
        );
    };
}

export default Login;
