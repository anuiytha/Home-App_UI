import React, { useState } from "react";
import styled from "styled-components";
import { SidebarData } from "./SidebarData";
import SubMenu from "./SubMenu";
import { FaBars } from "react-icons/fa";


const SidebarContainer = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #333;
  transition: width 0.3s ease;
  overflow-x: hidden;
`;

const SidebarWrapper = styled.div`
  width: 100%;
  height:100vh;
  display: flex;
  flex-direction: column;
  margin-left: 15px;
`;

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <SidebarContainer style={{ width: isOpen ? "200px" : "80px" }}>
            <SidebarWrapper>
                <FaBars
                    style={{ margin: "20px 0", cursor: "pointer" }}
                    onClick={toggleSidebar}
                    color="white"
                    size={20}
                />
                {SidebarData.map((item, index) => {
                    if (item.title === "Setting") {
                        return (
                            <SubMenu key={index} item={item} isOpen={isOpen}>
                                {item.subMenus.map((subItem, subIndex) => (
                                    <SubMenu key={subIndex} item={subItem} isOpen={isOpen} />
                                ))}
                            </SubMenu>
                        );
                    } else {
                        return <SubMenu key={index} item={item} isOpen={isOpen} />;
                    }
                })}

            </SidebarWrapper>
        </SidebarContainer>
    );
};

export default Sidebar;