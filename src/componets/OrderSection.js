import React from 'react';
import styled from 'styled-components';
import {ButtonAddItem} from "./ButtonAddItem";
import OrderListItem from "./OrderListItem";

const OrderStyled = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 80px;
  left: 0;
  background: #fff;
  min-width: 380px;
  height: calc(100% - 80px);
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.95);
  padding: 20px;
`;

const OrderTitle = styled.h2`
  text-align: center;
  margin-bottom: 20px;
`;

const OrderContent = styled.div`
  flex-grow: 1;
`;

const OrderList = styled.ul``;

const OrderTotal = styled.div`
  display: flex;
  margin: 0 25px 20px;

  & span:first-child {
    flex-grow: 1;
  }
`;

const TotalPrice = styled.span`
  text-align: right;
  min-width: 65px;
  margin-left: 20px
`;

const OrderSection = () => {
    return (
        <OrderStyled>
            <OrderTitle>YOUR ORDER</OrderTitle>
            <OrderContent>
                <OrderList>
                    <OrderListItem/>
                    <OrderListItem/>
                    <OrderListItem/>
                </OrderList>
            </OrderContent>
            <OrderTotal>
                <span>Total:</span>
                <span>5</span>
                <TotalPrice>850 ILS</TotalPrice>
            </OrderTotal>
            <ButtonAddItem>CHECKOUT</ButtonAddItem>
        </OrderStyled>
    );
};

export default OrderSection;
