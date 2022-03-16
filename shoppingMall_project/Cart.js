import React from 'react';
import { Table } from 'react-bootstrap';
import { connect } from 'react-redux';

function Cart(props) {
    return (
    <div>
        <Table responsive>
            <tr>
                <th>#</th>
                <th>상품명</th>
                <th>수량</th>
                <th>변경</th>
            </tr>
            {props.state.map((a, i) => {
                return (
                <tr>
                    <td>{ props.state[i].id}</td>
                    <td>{ props.state[i].name }</td>
                    <td>{ props.state[i].quan }</td>
                    <td>Table cell</td>
                </tr>
                )
            })}
        </Table>
    </div>
    )
}

// redux store 데이터를 가져와서 props로 변환해주는 함수 (state를 props화 시켜주는)
function 함수명(state) {
    return {
        state: state 
    }
}

export default connect(함수명)(Cart)

// export default Cart;