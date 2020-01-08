import React, { Component } from 'react';
import styled from 'styled-components';
import logo from '../../img/study.png';
import gsm from '../../img/icon.png';
import './Footer.css';

class Footer extends Component {
    render() {
        return(
            <Foot>
                <div className="made">
                <img src={logo} alt="학생" width="300px" height="210px"></img>
                    <img className="gsm" src={gsm} alt="로고" width="250px" height="120px"></img>
                <a href="https://map.naver.com/v5/search/광주소프트웨어마이스터고등학교/place/11556600?c=14114918.9709118,4183295.8457909,15,0,0,0,dh" className="seat">광주광역시 광산구 상무대로 312 광주 소프트웨어 마이스터고등학교</a>
                    <p className="Front">Front End<br /><br />문상규<br /><br />안채웅</p>
                    <p className="Back">Back End<br /><br />류호성<br /><br />안채웅<br /><br />백성수</p>
                </div>
            </Foot>
        );
    };
}

const Foot = styled.div`
position: absolute;
top: 79%;
width: 100%;
height: 210px;
background-color: lightgray;
box-shadow: 1px 1px 6px #3f3f3fe8;
`;

export default Footer;