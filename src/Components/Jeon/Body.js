import React, { Component } from 'react';
import './Body.css';
import styled from 'styled-components';
import mobile from '../../img/mobile.gif';
import web from '../../img/web.png';
import ict from '../../img/ict.png';
import bean from '../../img/bean.png';
import D3 from '../../img/3d.png';

class Body extends Component {
    render(){
        return(
            <Bod>
                <div className="boxboxbox">
                    <h2>스크롤 하기</h2>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
            <div className="container">
                <div class="topic">전공 동아리</div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={mobile} alt="모바일"/>
                        </div>
                            <div class="content">
                                <div>
                                    <h3>모바일 로보틱스</h3>
                                <p>모바일 로보틱스분야 기능경기대회를 출전하는 동아리로 이대회는 로봇에 알고리즘을 넣어 3가지 과제를 푸는 경기입니다.
                                    </p>
                                    <button type="submit">신청하기</button>
                                    </div>
                                </div>
                            </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={web} alt="웹"/>
                        </div>
                            <div class="content">
                                <div>
                                    <h3>우리가 웹</h3>
                                <p>웹 프론트 엔드와 백 엔드의 전공 능력 함양과 웹 관련 대회에 출전하는 동아리
                                    </p>
                                    <button type="submit">신청하기</button>
                                </div>
                            </div>
                        </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={ict} alt="ict"/>
                        </div>
                        <div class="content">
                            <div>
                                <h3>ICT</h3>
                                <p>GSM 1티어 동아리
                                    </p>
                                <button type="submit">신청하기</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={bean} alt="bean"/>
                        </div>
                        <div class="content">
                            <div>
                                <h3>빈실</h3>
                                <p>소프트웨어와 임베디드로 나뉘어 있는 동아리로 개별 과제가 주어짐.
                                    </p>
                                <button type="submit">신청하기</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={D3} alt="3D"/>
                        </div>
                        <div class="content">
                            <div>
                                <h3>쌈디</h3>
                                <p>3D모델링부터 시작하여 프린팅까지하는 동아리로 3D프린팅 관련 대회에서 좋은 성적을 거둔 동아리
                                    </p>
                                <button type="submit">신청하기</button>
                            </div>
                        </div>
                    </div>
            </div>
            </Bod>
        );
    };
}

const Bod = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  `;

export default Body;