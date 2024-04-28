import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Footer from "../../../components/Footer";

function Lalar() { // Consider renaming to a more descriptive name
  const mapRef = useRef(null);

  const initMap = () => {
    const mapOptions = {
      center: { lat: 0, lng: 0 },
      zoom: 10,
    };

    const map = new window.google.maps.Map(mapRef.current, mapOptions);

    // Additional map customization can be done here
  };

  useEffect(() => {
    const googleMapScript = document.createElement('script');
    googleMapScript.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyCj5mlYEy09B3Mr2nN4PAJXYA6CAvyq01k&callback=initMap";
    googleMapScript.async = true;
    window.initMap = initMap;
    document.body.appendChild(googleMapScript);

    return () => {
      document.body.removeChild(googleMapScript);
    };
  }, []);

  return (
    <div className="flex flex-col h-screen">
      <div ref={mapRef} className="flex-grow" />
      <div className="flex justify-between bg-gray-800 text-white px-4 py-2">
        <Footer/>
      </div>
    </div>
  );
}

export default Lalar;