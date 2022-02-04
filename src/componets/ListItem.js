import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`

const Item = styled.li`
  position: relative;
  width: 400px;
  height: 155px;
  background-image: ${({img}) => `url(${img})`};
  background-position: center;
  background-size: cover;
  margin-top: 30px;
  margin-right: 15px;
  padding: 15px;
  font-size: 25px;
  color: white;
  z-index: 1;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: black;
    opacity: 30%;
    z-index: -1;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 0 5px 10px rgba(41, 154, 1, 0.60);

    &:after {
      opacity: 0;
    }
  }
`

const ListItem = ({itemsList}) => {
    return (
        <List>
            {itemsList.map((item) => (
                <Item
                    key={item.id}
                    img={item.img}
                >
                    <p>{item.name}</p>
                    <p>{item.price.toLocaleString('he-IL',
                        {style: 'currency', currency: 'ILS'})}</p>
                </Item>
            ))}
        </List>
    );
};

export default ListItem;
