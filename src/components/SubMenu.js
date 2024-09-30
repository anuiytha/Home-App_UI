import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: flex-start;
  text-align: flex-start;
  align-items: left;
  list-style: none;
  padding-top: 15px;
  height: 60px;
  text-decoration: none;
  font-size: 18px;
  &:hover {
    background: grey;
    cursor: pointer;
  }
`;

const SidebarIcon = styled.div`
  margin-right: 10px;
  margin-left: 5px;
`;

const SidebarLabel = styled.span`
  display: ${({ isOpen }) => (isOpen ? "inline-block" : "none")};
`;

const SubMenuContainer = styled.div`
  display: ${({ isOpen }) => (isOpen ? "block" : "none")};
`;

const SubMenu = ({ item, isOpen }) => {
    const [subMenuOpen, setSubMenuOpen] = useState(false);

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <>
            <SidebarLink to={item.path} onClick={toggleSubMenu}>
                <SidebarIcon>{item.icon}</SidebarIcon>
                <SidebarLabel isOpen={isOpen}>{item.title}</SidebarLabel>
            </SidebarLink>
            {item.subMenus && (
                <SubMenuContainer isOpen={subMenuOpen}>
                    {item.subMenus.map((subItem, index) => (
                        <SidebarLink key={index} to={subItem.path}>
                            <SidebarIcon>{subItem.icon}</SidebarIcon>
                            <SidebarLabel isOpen={isOpen}>{subItem.title}</SidebarLabel>
                        </SidebarLink>
                    ))}
                </SubMenuContainer>
            )}
        </>
    );
};

export default SubMenu;
