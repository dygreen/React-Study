/*eslint-disable*/

import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Jumbotron,
  Button,
} from "react-bootstrap";
import "./App.css";
// import { name, name2 } from "./data.js";
import Data from "./data.js";
import Detail from "./Detail.js";

import { Link, Route, Switch } from "react-router-dom";

function App() {
  let [shoes, shoesChange] = useState(Data);

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/detail">Detail</Link>
              </Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Something
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Switch>
        {/* Router 활용하여 페이지 나누기 */}
        {/* Main page */}
        <Route exact path="/">
          {/* Jumbotron */}
          <Jumbotron className="background">
            <h1>20% Season Off</h1>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <Button bsStyle="primary">Learn more</Button>
            </p>
          </Jumbotron>

          {/* Img */}
          <div className="container">
            <div className="row">
              {/* 반복문(Card)으로 데이터바인딩 */}
              {shoes.map((a, i) => {
                return <Card shoes={shoes[i]} i={i} key={i} />;
                {
                  /* {shoes[i]} or {a} */
                }
              })}

              {/* Component + props로 데이터바인딩 */}
              {/* <Card shoes={shoes[0]} />
          <Card shoes={shoes[1]} />
          <Card shoes={shoes[2]} /> */}

              {/* 기존 하드코딩 */}
              {/* <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="100%"
            />
            <h4>{shoes[0].title}</h4>
            <p>
              {shoes[0].content} & {shoes[0].price}
            </p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="100%"
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="100%"
            />
            <h4>상품명</h4>
            <p>상품설명 & 가격</p>
          </div> */}
            </div>
          </div>
        </Route>

        {/* Detail page */}
        <Route path="/detail/:id">
          <Detail shoes={shoes} />
          {/* <div className="container">
            <div className="row">
              <div className="col-md-6">
                <img
                  src="https://codingapple1.github.io/shop/shoes1.jpg"
                  width="100%"
                />
              </div>
              <div className="col-md-6 mt-4">
                <h4 className="pt-5">상품명</h4>
                <p>상품설명</p>
                <p>120000원</p>
                <button className="btn btn-danger">주문하기</button>
              </div>
            </div>
          </div> */}
        </Route>
        <Route path="/something" component={Card}></Route>

        {/* <Route path="/:id">
          <div>아무거나 적었을 때 보여주세요</div>
        </Route> */}
      </Switch>
    </div>
  );
}

function Card(props) {
  return (
    <div className="col-md-4">
      <img
        src={`https://codingapple1.github.io/shop/shoes${props.i + 1}.jpg`}
        width="100%"
      />
      {/* 위에서 i 라는 변수는 App이라는 부모 컴포넌트가 가지고 있는 변수이기 때문에 하위 컴포넌트에 props로 전송해주어야 갖다 쓸 수 있음 */}
      <h4>{props.shoes.title}</h4>
      <p>
        {props.shoes.content} & {props.shoes.price}
      </p>
    </div>
  );
}

export default App;
