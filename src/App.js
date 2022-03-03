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
  let [modal, modalChange] = useState(false);
  let [clickTitle, clickTitleChange] = useState(0);
  let [input, inputChange] = useState("");
  let [publish, publishChange] = useState("");

  // for 반복문
  function 반복된UI() {
    let array = [];
    for (let i = 0; i < 3; i++) {
      array.push(<div>안녕</div>);
    }
    return array;
  }

  // 수정 버튼
  function 수정() {
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

  // 글 발행 기능
  function publishTitle() {
    let addTitle = [...title];
    addTitle.unshift(publish);
    titleChange(addTitle);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <button onClick={수정}>수정</button>
      <button onClick={가나다순}>가나다순</button>
      {/* <div className="list">
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
      </div> */}
      {/* {반복된UI()} */}
      {/* <div className="list">
        <h3> {title[1]} </h3>
        <p> {date[1]} </p>
        <hr />
      </div>
      <div className="list"> */}
      {/* h3을 클릭하면 <Modal />이 등장하도록 */}
      {/* <h3 */}
      {/* // onClick={() => { */}
      {/* //   modalChange(true);
        // }}
      //   >
      //     {title[2]}
      //   </h3> */}
      {/* //   <p> {date[2]} </p>
      //   <hr />
      // </div> */}

      {/* 반복문 : .map() + 제목을 누르면 new 글의 제목이 바뀌는*/}
      {title.map((i, a) => {
        return (
          <div className="list" key={i}>
            <h3
              onClick={() => {
                clickTitleChange(a);
              }}
            >
              {i}
              <span
                onClick={() => {
                  likeChange(like++);
                }}
              >
                👍
              </span>
              {like}
            </h3>
            <p> {date[a]} </p>
            <hr />
          </div>
        );
      })}

      {/* 글 발행 기능: 글적고 저장버튼 누르면 글이 위에 하나 더 떠야함 */}
      <div className="publish">
        <input
          onChange={(e) => {
            publishChange(e.target.value);
          }}
        />
        <button onClick={publishTitle}>저장</button>
      </div>

      {/* 버튼을 누를 때 각각 다른 모달창이 뜨게 */}
      {/* <button
        onClick={() => {
          clickTitleChange(0);
        }}
      >
        버튼1
      </button>
      <button
        onClick={() => {
          clickTitleChange(1);
        }}
      >
        버튼2
      </button>
      <button
        onClick={() => {
          clickTitleChange(2);
        }}
      >
        버튼3
      </button> */}

      {/* 버튼을 누르면 <Modal />이 등장하고, 한번 더 누르면 닫히는 */}
      <button
        onClick={() => {
          modalChange(!modal);
        }}
      >
        new 글
      </button>

      {/* props: 자식 component에 state 전해주는법 */}
      {modal == true ? (
        <Modal title={title} date={date} clickTitle={clickTitle} />
      ) : null}

      {/* {input} */}
      {/* 사용자가 입력한 input값 저장하기 */}
      {/* <input
        onChange={(e) => {
          inputChange(e.target.value);
        }}
      /> */}
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal">
      <h2>{props.title[props.clickTitle]}</h2>
      <p>{props.date[1]}</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
