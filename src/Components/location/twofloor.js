import React, { Component } from 'react';
import './twofloor.css';
import styled from 'styled-components';
import Header from '../Main/Header';
import {Link} from 'react-router-dom';

class TwoFloor extends Component {
    render() {
        return (
            <Container>
                <Header/>
                <div class="btn_box">
                    <Link to="/one"><button className="btn_b">1층</button></Link>
                    <Link to="/two"><button className="btn_b">2층</button></Link>
                    <Link to="/three"><button className="btn_b">3층</button></Link>
                    <Link to="/four"><button className="btn_b">4층</button></Link>
                </div>
                <div className="new1">
                <div id="two_r1"></div>
                <div id="two_r2"></div>
                <div id="two_r3"></div>
                <div id="two_r4"></div>
                <div id="two_r5"></div>
                <div id="two_r6"></div>
                <div id="two_r7"></div>
                <div id="two_r8"></div>
                <div id="two_r8-2"></div>
                <div id="two_r9"></div>
                <div id="two_r10"></div>
                <div id="two_r11"></div>
                <div id="two_r12"></div>
                <div id="two_r13"></div>
                <div id="two_r14"></div>
                <div id="two_r15"></div>
                <div id="two_r16"></div>
                <div id="two_t1">여자<br />화장실</div>
                <div id="two_t2">복도</div>
                <div id="two_t3">3-1</div>
                <div id="two_t4">3-2</div>
                <div id="two_t5">2학년 상담실</div>
                <div id="two_t6">홈베이스</div>
                <div id="two_t7">복도</div>
                <div id="two_t8">3-3</div>
                <div id="two_t9">3-4</div>
                <div id="two_t10">웹기능<br />경기장</div>
                <div id="two_t10-2">회의실</div>
                <div id="two_t11">복도</div>
                <div id="two_t12">계단</div>
                <div id="two_t13">남자<br />화장실</div>
                <div id="two_rr"></div>
                <div id="two_tr">계단</div>
                <div id="two_t14">임베디드실</div>
                <div id="two_t15">IOT실</div>
                <div id="two_t16">마이스터부</div>
                <div id="two_t17">계단</div>
                <div id="two_r17"></div>
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

export default TwoFloor;