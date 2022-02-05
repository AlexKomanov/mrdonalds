import React from 'react';
import styled from 'styled-components';


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
  width: 450px;
  height: 450px;
`;

const ModalWindowBanner = styled.div`
  width: 100%;
  height: 150px;
  background-image: url(${({img}) => img});
  background-size: cover;
  background-position: center;
  margin-bottom: 20px;
`


const ItemModalWindow = ({openItem, setOpenItem}) => {

    const closeModalWindow = (e) =>{
        if (e.target.id === 'overlay') {
            setOpenItem(null);
        }
    }

    if (!openItem) {
        return null;
    }

    return (
        <Overlay id="overlay" onClick={closeModalWindow}>
            <ModalWindow>
                <ModalWindowBanner img={openItem.img}/>
                {openItem.name}
            </ModalWindow>
        </Overlay>
    );
};

export default ItemModalWindow;
