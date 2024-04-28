import React from "react";
import { Link } from "react-router-dom";
import {
  FiBookOpen,
  FiMenu,
  FiAlertTriangle,
  FiCalendar,
  FiMap,
} from "react-icons/fi"; // Import the AlertTriangle icon from React Icons

const Footer = () => {
  return (
    <>
      <footer className="fixed inset-x-0 bottom-2 h-9 bg-black-700 ">
        <div className="flex flex-col h-screen">
          <div className="flex justify-between bg-gray-800 text-white px-4 py-2">
            <Link to="/safety" className="text-xl font-bold">
              <FiCalendar className="inline-block mr-2" />
            </Link>
            <Link to="/room" className="text-xl font-bold">
              <FiMap className="inline-block mr-2" />
            </Link>
            <Link to="/SafeZone" className="text-xl font-bold">
              <FiBookOpen className="inline-block mr-2" />
            </Link>
            <Link to="/menu" className="text-xl font-bold">
              <FiMenu className="inline-block mr-2" />
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
