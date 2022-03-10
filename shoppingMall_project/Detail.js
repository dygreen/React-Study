import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import "./App.css";
import "./Detail.scss";

// styled-components
let 박스 = styled.div`
  padding: 20px;
`;

let 제목 = styled.h4`
  font-size: 25px;
  color: ${(props) => props.색상};
`; // 비슷한 형태를 가진 UI가 여러개 필요할 때 props 문법 사용

function Detail(props) {
  let { id } = useParams();
  let findProduct = props.shoes.find((product) => {
    return product.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
      <박스>
        <제목 className="red" /*색상="blue"*/>Detail</제목>
      </박스>

      <div className="my-alert-yellow">
        <p>재고가 얼마 남지 않았습니다</p>
      </div>

      <div className="row">
        <div className="col-md-6">
          <img
            src={`https://codingapple1.github.io/shop/shoes${
              findProduct.id + 1
            }.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6 mt-4">
          {/* 확장성 있는 */}
          <h4 className="pt-5">{findProduct.title}</h4>
          <p>{findProduct.content}</p>
          <p>{findProduct.price}원</p>
          {/* 기존 */}
          {/* <h4 className="pt-5">{props.shoes[id].title}</h4>
          <p>{props.shoes[id].content}</p>
          <p>{props.shoes[id].price}</p> */}
          <button className="btn btn-danger" id="orderBtn">
            주문하기
          </button>
          <button
            className="btn btn-danger"
            onClick={() => {
              history.goBack();
            }}
          >
            뒤로가기
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
