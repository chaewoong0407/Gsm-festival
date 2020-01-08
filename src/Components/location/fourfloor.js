import React, { Component } from 'react';
import styled from 'styled-components';
import './fourfloor.css';
import { Link } from 'react-router-dom';
import Header from '../Main/Header';

class FourFloor extends Component {
    render(){
        return(
            <Container>
                <Header/>
                <div class="btn_box">
                    <Link to="/one"><button className="btn_b">1층</button></Link>
                    <Link to="/two"><button className="btn_b">2층</button></Link>
                    <Link to="/three"><button className="btn_b">3층</button></Link>
                    <Link to="/four"><button className="btn_b">4층</button></Link>
                </div>
                <div className="new">
                <div id="four_r1"></div>
                <div id="four_r2"></div>
                <div id="four_r3"></div>
                <div id="four_r4"></div>
                <div id="four_r5"></div>
                <div id="four_r6"></div>
                <div id="four_r7"></div>
                <div id="four_r8"></div>
                <div id="four_r9"></div>
                <div id="four_r10"></div>
                <div id="four_r11"></div>
                <div id="four_r12"></div>
                <div id="four_r13"></div>
                <div id="four_t1">여자<br/>화장실</div>
                <div id="four_t2">복도</div>
                <div id="four_t3">1-1</div>
                <div id="four_t4">1-2</div>
                <div id="four_t5">1학년 상담실</div>
                <div id="four_t6">홈베이스</div>
                <div id="four_t7">복도</div>
                <div id="four_t8">1-3</div>
                <div id="four_t9">1-4</div>
                <div id="four_t10">프로그래밍1실</div>
                <div id="four_t11">복도</div>
                <div id="four_t12">계단</div>
                <div id="four_t13">남자<br/>화장실</div>
                <div id="four_rr"></div>
                <div id="four_t14">계단</div>
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


export default FourFloor;