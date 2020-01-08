import React, { Component } from 'react';
import './onefloor.css';
import styled from 'styled-components';
import Header from '../Main/Header';
import {Link} from 'react-router-dom';

class OneFloor extends Component {
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
                <div id="one_r1"></div>
                <div id="one_r2"></div>
                <div id="one_r3"></div>
                <div id="one_r4"></div>
                <div id="one_r5"></div>
                <div id="one_r6"></div>
                <div id="one_r7"></div>
                <div id="one_r8"></div>
                <div id="one_r9"></div>
                <div id="one_r10"></div>
                <div id="one_rr10"></div>
                <div id="one_rrr10"></div>
                <div id="one_r11"></div>
                <div id="one_r12"></div>
                <div id="one_r13"></div>
                <div id="one_r14"></div>
                <div id="one_r15"></div>
                <div id="one_r16"></div>
                <div id="one_r17"></div>
                <div id="one_r18"></div>
                <div id="one_r19"></div>
                <div id="one_t1">여자<br/>화장실</div>
                <div id="one_t2">복도</div>
                <div id="one_t3">보건실</div>
                <div id="one_t4">출입구</div>
                <div id="one_tt4">출입구</div>
                <div id="one_t5">교장실</div>
                <div id="one_t6">행정실</div>
                <div id="one_t7">복도</div>
                <div id="one_t8">방송실</div>
                <div id="one_t9">교무실</div>
                <div id="one_t10"></div>
                <div id="one_tt10">계단</div>
                <div id="one_t11">복도</div>
                <div id="one_t12">남직원<br/>화장실</div>
                <div id="one_t13">서버실</div>
                <div id="one_rr"></div>
                <div id="one_t14">계단</div>
                <div id="one_t15">출입구</div>
                <div id="one_t16">SW개발<br/>1실</div>
                <div id="one_t17">SW개발<br/>2실</div>
                <div id="one_t18">인쇄실</div>
                <div id="one_t19">출입구</div>
                <div id="one_t20">계단</div>
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

export default OneFloor;