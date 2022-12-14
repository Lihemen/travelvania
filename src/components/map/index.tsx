import React, { useState, useEffect } from "react";
import Geocode from "react-geocode";
import GoogleMapReact from "google-map-react";
import "./map.css";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY ?? "");
Geocode.setLanguage("en");

type MarkerProps = {
  color: string;
  name: string;
  lat?: number;
  lng?: number;
};

const Marker: React.FC<MarkerProps> = (props) => {
  const { color, name } = props;
  return (
    <>
      <div
        className="pin bounce"
        style={{ backgroundColor: color, cursor: "pointer" }}
        title={name}
      />
      <div className="pulse" />
    </>
  );
};

export const Map = (props: { address: string }) => {
  const [center, setCenter] = useState({
    lat: 9.070687214723613,
    lng: 7.434872271164185,
  });

  useEffect(() => {
    const recalibrate = async () => {
      const response = await Geocode.fromAddress(props.address);
      const { lat, lng } = response.results[0].geometry.location;
      setCenter({ lat, lng });
    };
    recalibrate();
  }, [props.address]);

  const getMapOptions = () => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "on" }],
        },
      ],
    };
  };
  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY ?? "" }}
        center={center}
        defaultZoom={18}
        options={getMapOptions}
      >
        <Marker
          lat={center.lat}
          lng={center.lng}
          name="My Marker"
          color="red"
        />
      </GoogleMapReact>
    </div>
  );
};

