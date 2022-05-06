import React from 'react'
import styled from "styled-components"

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
  border: 1px solid black;
  background-color: whitesmoke;
`;
const Th = styled.th`
  border: 1px solid black;
  background-color: whitesmoke;
`;


const Cart = () => {
  return (<>
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
    </Table>
  </>
  )
}

export default Cart