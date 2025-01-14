import React from "react";
import { GoogleMap, useLoadScript, MakerF, MarkerF } from "@react-google-maps/api";
import { REACT_APP_GOOGLE_MAPS_KEY } from "../constants";

const MapComponent = ({ selectedLocation }) => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: REACT_APP_GOOGLE_MAPS_KEY,
    });
    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);

    if (loadError) return "Error";
    if (!isLoaded) return "Maps";


    return (
        <div style={{ marginTop: "30px" }}>
            <GoogleMap mapContainerStyle={{
                height: "300px",
            }}
                center={selectedLocation}
                zoom={13}
                onLoad={onMapLoad}>

                <MarkerF position={selectedLocation}
                    icon={"http://maps.google.com/mapfiles/ms/icons/red-dot.png"} />

            </GoogleMap>
        </div>
    )

}
export default MapComponent;