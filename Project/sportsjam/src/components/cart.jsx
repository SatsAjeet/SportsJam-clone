
import React from 'react'
import styled from "styled-components"
import {cart_data,increase_qty,decrease_qty,delete_cart_data} from "../redux/action"
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom";
import cartdatavalue from "../cartdata.json";


const Div = styled.div`
  padding: 10px;
  background-color: #dbdbdb;
  font-size: 15px;
  font-weight: 900;
  `;
const Table = styled.table`
  widTh: 100%;
  text-align: left;
  border-collapse: collapse;
`;
const ProductName = styled.th`
  width: 60%;
  border: 1px solid gray;
  background-color: whitesmoke;
  padding: 5px;
`;
const Th = styled.th`
  border: 1px solid gray;
  background-color: whitesmoke;
  padding: 5px;
`;
const Td = styled.td`
  border: 1px solid gray;
  vertical-align: top;
  padding: 7px;
`;
const Td1 = styled.td`
  border: 1px solid gray;
  vertical-align: top;
  display: flex;
  padding: 7px;
`;
const Img = styled.img`
  width: 100px;
  height: 100px;
  padding: 7px;
  border: 1px solid gray;
`;
const Cross = styled.img`
width: 30px;
height: 30px;
padding: 7px;
cursor : pointer;
border: 3px solid red;
`
const Button = styled.button`
width: 30px;
height: 30px;
font-size: 25px;
`
const Quantity = styled.div`
  border: 1px solid gray;
  width: 40px;
  height: 30px;
  text-align: center;
`;

const Cart = () => {
  const data = useSelector((state) => state.cartdata);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(delete_cart_data(id))
  }
  React.useEffect(() => {
    dispatch(cart_data(cartdatavalue))
  }, [])
  return (
    <>
      <Div>Shopping Cart</Div>
      <Table>
        <thead>
          <tr>
            <ProductName>Product Name</ProductName>
            <Th>Unit Price</Th>
            <Th>Quantity</Th>
            <Th>Total</Th>
            <Th>Remove</Th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <>
                <tr>
                  <Td1>
                    <Img src={item.img} alt={item.img} />
                    <p>{item.desc}</p>
                  </Td1>
                  <Td>₹{item.mrp}</Td>
                  <Td>
                    <div style={{ display: "flex", textAlign: "center" }}>
                      <Button
                        onClick={() => dispatch(decrease_qty(item.id))}>-</Button>
                      <Quantity>{item.qty}</Quantity>
                      <Button
                        onClick={() => dispatch(increase_qty(item.id))}>+</Button>
                    </div>
                  </Td>
                  <Td>₹{item.mrp * item.qty}</Td>
                  <Td>
                    <Cross
                      onClick={() => handleDelete(item.id)}
                      src="https://thumbs.dreamstime.com/z/red-cross-symbol-icon-as-delete-remove-fail-failure-incorr-incorrect-answer-89999776.jpg"
                      alt="remove"
                    />
                  </Td>
                </tr>
              </>
            );
          })}
        </tbody>
      </Table>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button
          style={{
            padding: "7px 17px",
            color: "white",
            background: "darkgray",
            border: "0px solid",
            fontSize: "12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/products")}
        >
          CONTINUE SHOPPING
        </button>
        <button
          style={{
            padding: "5px 10px",
            color: "white",
            background: "orangered",
            border: "0px solid",
            fontSize: "12px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => navigate("/payment")}
        >
          PROCEED TO PAY
        </button>
      </div>
    </>
  );
}

export default Cart
