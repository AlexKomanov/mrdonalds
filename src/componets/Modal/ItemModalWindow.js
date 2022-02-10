import React from 'react';
import styled from 'styled-components';
import {ButtonAddItem} from "../Styled/ButtonAddItem";


const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 20;
`;

const ModalWindow = styled.div`
  background-color: #fff;
  top: 65px;
  width: 450px;
  height: 450px;
`;

const ModalWindowBanner = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
`;

const ModalWindowContent = styled.section`
  display: flex;  
  flex-direction:column;
  justify-content: space-between;
  height: calc(100% - 230px);
  padding: 20px;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Pacifico', cursive;
`;


const ItemModalWindow = ({openItem, setOpenItem, orders, setOrders}) => {

    const closeModalWindow = (e) =>{
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    const order = {
        ...openItem
    };

    const addToOrder = () => {
        setOrders([...orders, order])
        setOpenItem(null)
    }

    return (
        <Overlay id="overlay" onClick={closeModalWindow}>
            <ModalWindow>
                <ModalWindowBanner img={openItem.img}/>
                <ModalWindowContent>
                    <HeaderContent>
                        <div>{openItem.name}</div>
                        <div>{openItem.price}</div>
                    </HeaderContent>
                </ModalWindowContent>
                <ButtonAddItem onClick={addToOrder}>
                    Add to cart
                </ButtonAddItem>
            </ModalWindow>
        </Overlay>
    );
};

export default ItemModalWindow;
