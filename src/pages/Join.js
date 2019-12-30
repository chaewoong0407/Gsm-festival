import React, { Component } from 'react';
import './Join.css';
import home from '../img/home.png';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Join extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: '',
            pw: '',
            re_pw: '',
            email: '',
            name: '',
        };
        this.onTextValidation = this.onTextValidation.bind(this);
    }
    handleName = e => {
        this.setState({ name : e.target.value });
    }
    handleId = e => {
        this.setState({ id : e.target.value });
    }
    handleEmail = e => {
        this.setState({ email : e.target.value });
    }
    handlePw = e => {
        this.setState({ pw: e.target.value });
    }
    handleRe = e => {
        this.setState({ re_pw: e.target.value });
    }
    handleCount = e => {
        if(this.state.count===1){
            return true;
        }
        else {
            e.preventDefault();
            this.onTextValidation();
        }
    }
    onSubmit = e => {
        e.preventDefault();
        this.onTextValidation();
    };
    onTextValidation = () => {
        let emailError = "";
        let nameError = "";
        let idError = "";
        let pwError = "";
        let reError = "";
        if(this.state.name.length<=1){
            nameError = "";
            this.setState({ nameError });
            emailError = "";
            this.setState({ emailError });
            idError = "";
            this.setState({ idError });
            pwError = "";
            this.setState({ pwError });
            nameError = "이름은 2글자 이상이여야 합니다.";
            this.setState({ nameError });
            reError = "";
            this.setState({ reError });
            return false;
        } 
        else if (!isEmail(this.state.email)) {
            nameError = "";
            this.setState({ nameError });
            emailError = "이메일 형식이 올바르지 않습니다.";
            this.setState({ emailError });
            idError = "";
            this.setState({ idError });
            reError = "";
            this.setState({ reError });
            return false;
        }
        else if (this.state.id.length<6) {
            nameError = "";
            this.setState({ nameError });
            emailError = "";
            this.setState({ emailError });
            idError = "아이디는 6자 이상이여야 합니다.";
            this.setState({ idError });
            reError = "";
            this.setState({ reError });
            return false;
        } else if(this.state.pw.length < 8) {
            nameError = "";
            this.setState({ nameError });
            emailError = "";
            this.setState({ emailError });
            idError = "";
            this.setState({ idError });
            pwError = "비밀번호는 8자 이상이여야 합니다.";
            this.setState({ pwError });
            reError = "";
            this.setState({ reError });
            return false;
        } else if (this.state.pw !== this.state.re_pw){
            nameError = "";
            this.setState({ nameError });
            emailError = "";
            this.setState({ emailError });
            idError = "";
            this.setState({ idError });
            pwError = "";
            this.setState({ pwError });
            reError = "비밀번호가 올바르지 않습니다.";
            this.setState({ reError });
            return false;
        } else {
            nameError = "";
            this.setState({ nameError });
            emailError = "";
            this.setState({ emailError });
            idError = "";
            this.setState({ idError });
            pwError = "";
            this.setState({ pwError });
            reError = "";
            this.setState({ reError });
            alert("회원가입 성공!");
            axios.get('/user', {
                params: { id: 'velopert', pass : 'password'}
            })
                .then(response => { console.log(response) });
            return true;
        }
    };
    render(){
        return (
            <div className="boxbox">
                <h1>회원가입</h1>
                <form onSubmit={this.onSubmit}>
                    <Link to="/Main"><img src={home} className="home2" alt="홈"/></Link>
                <input className="name1" type="text" placeholder="Name" value={this.state.name} onChange={this.handleName}/>
                    <div className="nameError">
                        {this.state.nameError}
                    </div>
                <input className="mail1" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                    <div className="emailError">
                        {this.state.emailError}
                    </div>
                <input className="id1" type="text" placeholder="ID" value={this.state.id} onChange={this.handleId}/>
                    <div className="idError">
                        {this.state.idError}
                    </div>
                <input className="pass1" type="password" placeholder="Password" value={this.state.pw} onChange={this.handlePw}/>
                    <div className="pwError">
                        {this.state.pwError}
                    </div>
                <input className="pass_enter" type="password" placeholder="Re_enter password" value={this.state.re_pw} onChange={this.handleRe} />
                    <div className="reError">
                        {this.state.reError}
                    </div>
                    <button className="bbt">완료</button>
                <div className="Log1"><span className="aa">*</span>이미 아이디가 있으신가요? <Link to="/" className="color">로그인창으로 돌아가기</Link></div>
                </form>
            </div>
        );
   };
}

export const isEmail = email => {
    const emailRegex = /^(([^<>()\].,;:\s@"]+(\.[^<>()\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    return emailRegex.test(email);
};

export default Join;