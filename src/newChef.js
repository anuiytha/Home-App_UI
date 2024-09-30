import React, { useState } from "react";
import "./newchef.css";
import MapComponent from "./components/map";
import SearchLocationInput from "./GooglePlacesApi";

const NewChef = () => {

    const [selectedLocation, setSelectedLocation] = useState({
        lat: 28.7041,
        lng: 77.1025,
    })
    return (
        <>
            {/* <h2> This is the new chef component</h2> */}
            <div className="checkout-container">
                <h2 align="left"> Chef Information</h2>
                <form action="#" method="post">
                    <div className="form-group row">
                        <div className="from-group">
                            <label htmlFor="first_name">First Name:</label>
                            <input type="text" id="first_name" name="first_name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="last_name">Last Name:</label>
                            <input type="text" id="last_name" name="last_name" required />
                        </div>

                    </div>

                    <div style={{ height: "90vh", width: "100%" }} className="form-group">
                        <SearchLocationInput setSelectedLocation={setSelectedLocation} />
                        <MapComponent selectedLocation={selectedLocation} />

                        <div className="form-group row">
                            <div className="from-group">
                                <label htmlFor="first_name">Email:</label>
                                <input type="text" id="first_name" name="first_name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Phone Number:</label>
                                <input type="text" id="last_name" name="last_name" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="last_name">Zip Code:</label>
                                <input type="text" id="last_name" name="last_name" required />
                            </div>
                            <button className="btn"> Proceed</button>
                        </div>

                    </div>
                </form>
            </div>
        </>
    )
}

export default NewChef;