import React, { Component } from 'react';
import home from '../img/home.png';
import './Find_ID.css';
import { Link } from "react-router-dom";
import axios from 'axios';

class Find_ID extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: ''
        };
        this.onTextValidation = this.onTextValidation.bind(this);
    }

    handleName = e => {
        this.setState({ name: e.target.value });
    }
    handleEmail = e => {
        this.setState({ email: e.target.value });
    }
    onSubmit = e => {
        e.preventDefault();
        this.onTextValidation();
    };
    onTextValidation = () => {
        axios.get('http://localhost:4000/id', {
            params: { name: this.state.name, mail: this.state.email }
        }).then(response => {
            console.log(response);
        }).catch(err => console.log(err));
    }

    render(){
        return(
            <div class="box">
                <form onSubmit={this.onSubmit}>
                <h1>ID/PW 찾기</h1>
                <Link to="/Main"><img src={home} className="home1" alt="메인페이지" /></Link>
                <Link to="/Find"><button className="Find_id">아이디</button></Link>
                <Link to="/Pass"><button className="Find_pass">비밀번호</button></Link>
                <span className="text_1">이름</span><input className="name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleName}/>
                <span className="text_2">이메일</span><input className="mail" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
                <button className="idpass">완료</button>
                <div className="Log"><Link to="/" class="color">로그인창으로 돌아가기</Link></div>
                </form>
            </div>
        );
    };
}

export default Find_ID;