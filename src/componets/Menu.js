import React from 'react';
import styled from 'styled-components';
import ListItem from "./ListItem";
import dbMenu from "./DBMenu";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`

const Menu = () => {
    return (
        <MenuStyled>
            <SectionMenu>
                <h2>Burgers</h2>
                <ListItem itemsList={dbMenu.burger}/>
            </SectionMenu>
            <SectionMenu>
                <h2>Drinks / Snacks</h2>
                <ListItem itemsList={dbMenu.other}/>
            </SectionMenu>
        </MenuStyled>
    );
};

export default Menu;
