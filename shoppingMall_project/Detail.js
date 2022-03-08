import React, { useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import "./App.css";

function Detail(props) {
  let { id } = useParams();
  let findProduct = props.shoes.find((product) => {
    return product.id == id;
  });
  let history = useHistory();

  return (
    <div className="container">
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
