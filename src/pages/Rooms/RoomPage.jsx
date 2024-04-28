import React, { useState, useRef, useEffect } from "react";
import {Link} from 'react-router-dom';
import { useParams } from "react-router-dom";

const RoomPage = () => {
  const mapRef = useRef(null);
  const { id } = useParams();
  const [currentLocationIndex, setCurrentLocationIndex] = useState(0);
  const [locations, setLocations] = useState([]);

  const [curSet, setCurSet] = useState(false);
  let map = null;

  
  useEffect(() => {
    loadMapScript();
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
    // Initialize the map
  map = new window.google.maps.Map(mapRef.current, {
      center: coords,
      zoom: 8,
    });

    // Add markers for each location
    locations.forEach((location, index) => {
      new window.google.maps.Marker({
        position: location.coords,
        map: map,
        title: location.name,
      });
    });
  };

  return (
    <div className="flex flex-col h-screen">
    <div ref={mapRef} className="flex-grow" />
    <div className="flex justify-between bg-gray-800 text-white px-4 py-2">
      <Link to="/safety" className="text-xl font-bold">
        Safety
      </Link>
      <Link to="/room" className="text-xl font-bold">
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

export default RoomPage;