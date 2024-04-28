import React from 'react';
import { Link } from 'react-router-dom';

function AddPlace() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">


      {/* App bar */}
      <div className="flex items-center justify-between h-14 bg-white px-4 shadow-md">
        <div className="text-xl font-bold">Places</div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow justify-center px-4 py-8 overflow-y-auto">
        <div className="text-xl font-bold mb-4">Get notified when someone leaves or enters places.</div>
        <div className="text-gray-600 mb-4">
          Add places to get notified when circle members enter or leave the place (2 free places).
        </div>
        <button className="btn bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded shadow-md">
          Add place
        </button>
      </div>

      <div className="flex items-center justify-center py-4">
        <Link to="/MapPlace">
          <button className="px-4 py-2 text-sm font-medium text-center text-gray-500 hover:text-gray-700">
            DONE? (Tap to go back)
          </button>
        </Link>
      </div>

    </div>
  );
}

export default AddPlace;
