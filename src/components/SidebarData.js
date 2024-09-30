import React, { useState } from "react";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import { FaUserCircle } from "react-icons/fa";

const Chef_Name = localStorage.getItem("Chef_Name")

export const SidebarData = [
    {
        title: Chef_Name,
        icon: <FaUserCircle />,
    },

    {
        title: "Home",
        path: "/home",
        icon: <AiIcons.AiFillHome />,
    },

    {
        title: "New Dish",
        path: "/addDish",
        icon: <IoIcons.IoIosStats />,
    }
];