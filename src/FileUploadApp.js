import React, { useState } from "react";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function FileUploadApp() {
    const [formData, setFormData] = useState({
        id: "",
        photopath: "",
    });

    console.log(formData);
    const [file, setFile] = useState();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();


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
            buildFormData.append("filepath", file);
        }

        console.log("Build Form Data", buildFormData);
        const response = await fetch(`http://localhost:5000/api/v1/filedetails`, {
            method: "POST",
            body: buildFormData,
        });

        const result = await response.json();
        toast.success('Data Inserted successfully');
        console.log("This is the result", result);
    };


    return (
        <div className="container-fluid">
            <ToastContainer position="top-center" autoClose={2000} theme="colored" />
            <h1 className="text-success"> Upload File Details</h1>

            <div className="form-group row">
                <label htmlFor="id" className="col-sm-2 col-form-label">
                    ID:
                </label>
                <div className="col-sm-10">
                    <input type="text" name="id" onChange={handleChange} />
                </div>
            </div>
            &nbsp; &nbsp; &nbsp;
            <div className="input-group mb-5">
                <label className="custom-file-label" htmlFor="inputGroupFile01">
                    Upload Photo:
                </label>
                &nbsp; &nbsp; &nbsp;
                <div className="custom-file-input">
                    <input type="file" className="custom-file-input" name="filepath" onChange={handleFileChange} />
                </div>
            </div>
            &nbsp; &nbsp; &nbsp;
            <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                Submit

            </button>


        </div>
    )

}

export default FileUploadApp;