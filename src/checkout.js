import React from "react";
import "./components/addDish.css"

const Checkout = () => {
    return (
        <>
            <h1> Customer Info</h1>

            <div className="form-group">
                <label htmlFor="Cust_FirstName">First Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="CustFirstName"
                    placeholder="First Name"
                    name="Cust_FirstName"

                />
            </div>

            <div className="form-group">
                <label htmlFor="Cust_LastName">Last Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="CustLastName"
                    placeholder="Last Name"
                    name="Cust_LastName"

                />
            </div>

            <div className="form-group">
                <label htmlFor="Cust_Email">Email</label>
                <input
                    type="text"
                    className="form-control"
                    id="CustEmail"
                    placeholder="Email"
                    name="Cust_Email"

                />
            </div>

            <div className="form-group">
                <label htmlFor="Cust_Address">Address</label>
                <input
                    type="text"
                    className="form-control"
                    id="CustAddress"
                    placeholder="Address"
                    name="Cust_Address"

                />
            </div>

            <div className="form-group">
                <label htmlFor="Cust_Country">Country</label>
                <input
                    className="form-control"
                    id="CustCountry"
                    placeholder="Country"
                    name="Cust_Country"

                ></input>
            </div>
            <div className="form-group">
                <label htmlFor="Cust_Zipcode">Zipcode</label>
                <input
                    className="form-control"
                    id="CustZipcode"
                    placeholder="Zipcode"
                    name="Cust_Zipcode"

                ></input>
            </div>

            <button className="btn btn-primary" >
                Submit
            </button>

        </>
    )
}

export default Checkout;