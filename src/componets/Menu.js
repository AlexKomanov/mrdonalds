import React from 'react';
import styled from 'styled-components';
import ListItem from "./ListItem";
import dbMenu from "./DBMenu";
import {Banner} from "./Banner";

const MenuStyled = styled.main`
  background-color: #ccc;
  margin-top: 80px;
  margin-left: 380px;
`;

const SectionMenu = styled.section`
  padding: 30px;
`

const Menu = ({setOpenItem}) => {
    return (
        <MenuStyled>
            <Banner/>
            <SectionMenu>
                <h2>Burgers</h2>
                <ListItem
                    itemsList={dbMenu.burger}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
            <SectionMenu>
                <h2>Drinks / Snacks</h2>
                <ListItem
                    itemsList={dbMenu.other}
                    setOpenItem={setOpenItem}
                />
            </SectionMenu>
        </MenuStyled>
    );
};

export default Menu;
