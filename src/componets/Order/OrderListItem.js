import React from 'react';
import trashIcon from '../../image/trash.svg'
import styled from "styled-components";

const OrderItemStyled = styled.li`
  display: flex;
  margin: 15px 0;
`;

const ItemName = styled.span`
  flex-grow: 1;
`;

const ItemPrice = styled.span`
  margin-left: 20px;
  margin-right: 10px;
  min-width: 65px;
  text-align: right;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashIcon});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
`;

const OrderListItem = ({order}) => {
    return (
        <OrderItemStyled>
            <ItemName>{order.name}</ItemName>
            <span>2</span>
            <ItemPrice>{order.price.toLocaleString('he-IL',
                {style: 'currency', currency: 'ILS'})}</ItemPrice>
            <TrashButton/>
        </OrderItemStyled>
    );
};

export default OrderListItem;
