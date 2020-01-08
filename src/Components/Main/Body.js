import React, { Component } from 'react';
import axios from 'axios';
import './Body.css';
import Clock from 'react-live-clock';
import main from '../../img/main.png';

class Body extends Component {
    constructor(props) {
        super(props);
        this.state = { hak: '' };
    }

    componentDidMount() {
        axios.get('http://localhost:4000/hak').then(res => this.setState({ hak: res.data })).catch(err => console.log(err));
    }
    render(){
        return(
            <div className="mainBody">
                <img className="mainimg" src={main} alt="메인" width="900px" height="500px"/>
            <div className="schedule_box">오늘의 학사일정
                <div className="int">
            <Clock format={'YYYY 년 MM 월 DD 일'} ticking={true} timezone={'US/Pacific'}/>
                <div className="dint">
                    {this.state.hak}
                </div>
                </div>
            </div>
            <div className="eat">
                    <p>아침</p>
                    <p>-----------------------------</p>
                    <p>스크램블채소볶음밥</p>
                    <p>케찹</p>
                    <p>아욱된장국</p>
                    <p>배추김치</p>
                    <p>치즈가래떡구이</p>
                    <p>초콜릿칩 쿠키</p>
                    <p>치킨텐더머스터드</p>
                    <br></br>
                    <p>점심</p>
                    <p>-----------------------------</p>
                    <p>볶짜면</p>
                    <p>단무지쪽파무침</p> 
                    <p>우렁살미나리초무침</p>
                    <p>소떡소떡꼬치소스</p>
                    <p>배추김치</p>
                    <p>석류푸딩</p>
            </div>
            <div className="notice">
                    <p>공지사항(추후 보완될 예정)</p>
            </div>
            </div>
        );
    };
}

export default Body;