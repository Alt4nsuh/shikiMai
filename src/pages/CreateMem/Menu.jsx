import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="flex flex-col bg-gray-100 p-4 rounded-lg shadow-md h-full">
      <div className="flex flex-row justify-between items-center">
      </div>
      <div className="flex flex-col mt-4 text-xl font-medium">
        <span className="text-gray-800">Menu</span>
        <div className="flex flex-row mt-2">
          <Link to="/addmember" className="flex items-center">
            <span className="text-base font-normal">Add a New Member</span>
          </Link>
        </div>
        <div className="flex flex-row mt-2">
          <Link to="/Circle" className="flex items-center">
            <span className="text-base font-normal">My Current Circle</span>
          </Link>
        </div>
        <div className="flex flex-row mt-2">
          <Link to="/Pro" className="flex items-center">
            <span className="text-base font-normal">My Profile</span>
          </Link>
        </div>
        <div className="flex flex-row mt-2">
          <Link to="/" className="flex items-center">
            <span className="text-base font-normal">My Circles</span>
          </Link>
        </div>
        <div className="flex flex-row mt-2 text-red-500">
          <Link to="/" className="flex items-center">
            <span className="text-base font-normal">Delete all data</span>
          </Link>
        </div>
      </div>
      <div className="flex flex-row mt-4 text-gray-500 text-xs">
        <span>Ma</span>
        <div className="flex flex-row  ml-auto">
          <Link to="/Safety" className="flex items-center ml-2">
            <span>Safety</span>
          </Link>
          <Link to="/AddPlace" className="flex items-center ml-2">
            <span>Place</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Menu;
