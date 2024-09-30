import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sidebar from "./Sidebar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../components/addDish.css";
import { buffer } from "buffer";


const CreateMenuApp = () => {
    const Chef_Id = localStorage.getItem("Chef_Id");
    //console.log("Chef_Id = ", Chef_Id)
    const [formData, setFormData] = useState({
        Chef_Id: Chef_Id,
        Item_Id: "",
        Item_Name: "",
        Item_Category: "",
        Item_Desc: "",
        Item_Price: "",
        Item_Cuisine: "",
        Item_Image: "",

    });
    const [file, setFile] = useState(); // State to manage the uploaded file
    const [uploaded, setUploaded] = useState(false);
    const [base64, setBase64] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
        setUploaded(false);
        console.log("Inside handleFileChange", e.target.files[0]);

        toast.error("All fields are mandatory");
    };


    // const handleSubmit = async (e) => {
    //     e.preventDefault(); // This will stop default page submission
    //     console.log("Inside handlesubmit", formData);

    //     const response = await fetch(`http://localhost:5000/api/v1/submissions`, {
    //         method: "POST",
    //         // body: buildFormData,
    //         body: JSON.stringify(formData),
    //         headers: {
    //             "Content-Type": "application/json",
    //         },

    //     });

    //     const result = await response.json();
    //     console.log(result)

    //     toast.success("Data Inserted successfully..");
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        var id = 0;
        try {
            const buildFormData = new FormData();
            for (const key in formData) {
                if (Array.isArray(formData[key])) {
                    formData[key].forEach((value) => buildFormData.append(key, value));
                } else {
                    buildFormData.append(key, formData[key]);
                }
            }
            console.log(file);
            if (file) {
                buildFormData.append('Item_Image', file);
            }
            console.log("Build Form Data", buildFormData);
            //return;
            const response = await axios.post(`http://localhost:5000/api/v1/addmenu`, buildFormData, {
                // method: "POST",
                // body: buildFormData,
                headers: {
                    'Content-Type': 'multipart/form-data',
                }

            });

            id = response.data.id.id
            console.log(response.data.id.id)
            setUploaded(true);
            const result = await response.json();
            toast.success("Data Inserted successfully..");
            console.log("This is result", result);

        } catch (error) {
            console.log('Error uploading data:', error);
        }
    };

    return (
        <>
            <Sidebar />
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />

            <div className="container">
                <div className="row">
                    <div className="col-md-8 offset-md-2 mt-2">
                        <h4> Add a Dish </h4>

                        {/* <div className="form-group">
                        <label htmlFor="Chef_Id">Chef Id</label>
                        <input
                            type="text"
                            className="form-control"
                            id="ChefId"
                            placeholder="Chef Id"
                            name="Chef_Id"
                            onChange={handleChange}
                        />
                    </div> */}
                        <div className="form-group">
                            <label htmlFor="Item_Id">Item Id</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ItemId"
                                placeholder="Item Id"
                                name="Item_Id"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Item_Name">Item Name</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ItemName"
                                placeholder="Item Name"
                                name="Item_Name"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Item_Category">Item Category</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ItemCategory"
                                placeholder="Item Category"
                                name="Item_Category"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Item_Desc">Item Description</label>
                            <input
                                type="text"
                                className="form-control"
                                id="ItemDesc"
                                placeholder="Item Desc"
                                name="Item_Desc"
                                onChange={handleChange}
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="Item_Price">Item Price</label>
                            <input
                                className="form-control"
                                id="ItemPrice"
                                placeholder="Item Price"
                                name="Item_Price"
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Item_Cuisine">Item Cuisine</label>
                            <input
                                className="form-control"
                                id="ItemCuisine"
                                placeholder="Item Cuisine"
                                name="Item_Cuisine"
                                onChange={handleChange}
                            ></input>
                        </div>
                        <div className="form-group">
                            <label htmlFor="Item_Image">Image </label>
                            <input type="file"
                                className="form-control"
                                placeholder="Item Image"
                                name="Item_Image"
                                // onChange={handleFileChange}
                                onChange={handleFileChange} />
                        </div>

                        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                            Submit
                        </button>



                        <hr />

                    </div>
                </div>
            </div >
        </>

    );
};


export default CreateMenuApp;