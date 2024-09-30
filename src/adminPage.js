import React from "react";
import Sidebar from "../src/components/Sidebar";


const Adminpage = () => {


    return (
        <>
            <Sidebar />
            <h1>This is the admin page</h1>
            <div className="checkout-container"></div>
            <div align="center">
                <a href="/newchef" class="btn btn-secondary">Add a new chef</a>


            </div>



        </>
    )
}

export default Adminpage;

