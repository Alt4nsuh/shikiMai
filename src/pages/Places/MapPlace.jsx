import React, { useState, useRef, useEffect } from "react";
import {Link} from 'react-router-dom';

const Map = () => {
  const mapRef = useRef(null);
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [locations, setLocations] = useState([
    { name: "Location 2", coords: { lat: 34.0522, lng: -118.2437 } },
    { name: "Location 2", coords: { lat: 30.0522, lng: -118.2437 } },
    { name: "safe", coords: { lat: 36.0522, lng: -118.2437 } },
    { name: "safe", coords: { lat: 38.0522, lng: -118.2437 } },
  ]);

  const [curSet, setCurSet] = useState(false);
  let map = null;

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        setLocations((prevLocations) => [
          ...prevLocations,
          {
            name: "sda",
            coords: { lat: latitude, lng: longitude },
          },
        ]);
        setCurSet(true);
      },
      (error) => {
        console.error("Error getting user location:", error);
      }
    );
  }, [setLocations, setCurSet]);

  useEffect(() => {
    if (curSet) {
      loadMapScript();
    }
  }, [curSet]);

  const loadMapScript = () => {
    const script = document.createElement("script");
    script.src =
      "https://maps.googleapis.com/maps/api/js?key=AIzaSyCj5mlYEy09B3Mr2nN4PAJXYA6CAvyq01k&libraries=places";
    script.async = true;
    script.defer = true;
    script.onload = initMap;
    document.head.appendChild(script);
  };

  const initMap = () => {
    const { coords } = locations[currentLocationIndex];
    map = new window.google.maps.Map(mapRef.current, {
      center: coords,
      zoom: 8,
    });

    locations.forEach((location, index) => {
      if (location.name === "safe") {
        const circle = new window.google.maps.Circle({
          strokeColor: "#FF0000",
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: "#FF0000",
          fillOpacity: 0.35,
          map: map,
          center: location.coords,
          radius: 10000,
        });
      }else{
        const marker = new window.google.maps.Marker({
          position: coords,
          map: map,
          title: 'Your Location',
          draggable: true 
        });
      }
    });
  };

  return (
    <div className="flex flex-col h-screen">
    <div ref={mapRef} className="flex-grow" />
    <div className="flex justify-between bg-gray-800 text-white px-4 py-2">
      <Link to="/safety" className="text-xl font-bold">
        Safety
      </Link>
      <Link to="/mapPlace" className="text-xl font-bold">
        Places
      </Link>
      <Link to="/SafeZone" className="text-xl font-bold">
        Safety-zone
      </Link>
      <Link to="/menu" className="text-xl font-bold">
        Menu
      </Link>
    </div>
  </div>
  );
};

export default Map;