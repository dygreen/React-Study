/* eslint-disable */
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  let [title, titleChange] = useState([
    "리액트 공부 시작",
    "인테리어 소품 소개",
    "별내 카페거리 맛집",
  ]);
  let [date, dateChange] = useState([
    "2월 17일 발행",
    "3월 2일 발행",
    "3월 19일 발행",
  ]);
  let posts = "강남 고기 맛집";
  let [like, likeChange] = useState(0);

  // 수정 버튼
  function changeTitle() {
    let newTitle = [...title];
    newTitle[0] = "자바스크립트 복습 시작";
    titleChange(newTitle);
  }

  // '가나다'순 정렬 버튼
  function 가나다순() {
    let arrangeTitle = [...title];
    arrangeTitle.sort();
    titleChange(arrangeTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={changeTitle}>수정</button>
      <button onClick={가나다순}>가나다순</button>
      <div className="list">
        <h3>
          {title[0]}
          <span
            onClick={() => {
              likeChange(like++);
            }}
          >
            👍
          </span>
          {like}
        </h3>
        <p> {date[0]} </p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[1]} </h3>
        <p> {date[1]} </p>
        <hr />
      </div>
      <div className="list">
        <h3> {title[2]} </h3>
        <p> {date[2]} </p>
        <hr />
      </div>
    </div>
  );
}

export default App;
