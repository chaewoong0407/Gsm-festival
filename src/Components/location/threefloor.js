import React, { Component } from 'react';
import './threefloor.css';
import styled from 'styled-components'; 
import Header from '../Main/Header';
import { Link } from 'react-router-dom';

class ThreeFloor extends Component {
    render() {
        return(
            <Container>
                <Header/>
                <div class="btn_box">
                    <Link to="/one"><button className="btn_b">1층</button></Link>
                    <Link to="/two"><button className="btn_b">2층</button></Link>
                    <Link to="/three"><button className="btn_b">3층</button></Link>
                    <Link to="/four"><button className="btn_b">4층</button></Link>
                </div>
                <div className="new1">
                <div id="three_r1"></div>
                <div id="three_r2"></div>
                <div id="three_r3"></div>
                <div id="three_r4"></div>
                <div id="three_r5"></div>
                <div id="three_r6"></div>
                <div id="three_r7"></div>
                <div id="three_r8"></div>
                <div id="three_r9"></div>
                <div id="three_r10"></div>
                <div id="three_r11"></div>
                <div id="three_r12"></div>
                <div id="three_r13"></div>
                <div id="three_r14"></div>
                <div id="three_r15"></div>
                <div id="three_r16"></div>
                <div id="three_t1">여자<br/>화장실</div>
                <div id="three_t2">복도</div>
                <div id="three_t3">2-1</div>
                <div id="three_t4">2-2</div>
                <div id="three_t5">2학년 상담실</div>
                <div id="three_t6">홈베이스</div>
                <div id="three_t7">복도</div>
                <div id="three_t8">2-3</div>
                <div id="three_t9">2-4</div>
                <div id="three_t10">프로그래밍2실</div>
                <div id="three_t11">복도</div>
                <div id="three_t12">계단</div>
                <div id="three_t13">남자<br/>화장실</div>
                <div id="three_rr"></div>
                <div id="three_tr">계단</div>
                <div id="three_t14">마이크로<br/>프로세서1실</div>
                <div id="three_t15">마이크로<br/>프로세서2실</div>
                <div id="three_t16">학생 생활 안전부</div>
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


export default ThreeFloor;