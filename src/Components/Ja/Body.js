import React, { Component } from 'react';
import './Body.css';
import styled from 'styled-components';
import spyq from '../../img/spyq.jpg';
import health from '../../img/health.png';
import movie from '../../img/movie.jpeg';
import interview from '../../img/interview.png';

class Body extends Component {
    render() {
        return (
            <Bod>
                <div className="box3">
                    <h2>스크롤 하기</h2>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="container">
                    <div class="topic">자율 동아리</div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={spyq} alt="스파이큐"/>
                        </div>
                        <div class="content">
                            <div>
                                <h3>SPYQ</h3>
                                <p>배구에 관심이 있다면 추천하는 동아리
                                    </p>
                                <button type="submit">신청하기</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={health} alt="헬스부"/>
                        </div>
                        <div class="content">
                            <div>
                                <h3>헬스부</h3>
                                <p>운동에 관심이 많고 다이어트를 한다면 추천하는 동아리
                                    </p>
                                <button type="submit">신청하기</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={movie} alt="영화감상부"/>
                        </div>
                        <div class="content">
                            <div>
                                <h3>영화감상부</h3>
                                <p>영화를 감상하는 동아리
                                    </p>
                                <button type="submit">신청하기</button>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="imgBx">
                            <img src={interview} alt="면접" />
                        </div>
                        <div class="content">
                            <div>
                                <h3>면접 동아리</h3>
                                <p>면접을 잘 보기위해 면접환경을 구성해서 모의 면접을 보는 동아리
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