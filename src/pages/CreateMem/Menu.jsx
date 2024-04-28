import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 p-4 rounded-lg shadow-md h-screen flex">
      <div className="flex flex-col space-y-6">
        <div className="text-3xl font-semibold text-gray-800 border-b-4 pb-2">Цэс</div>
        
        <Link to="/Create" className="menu-link border-b-4 pb-2">
          <span className="text-lg font-medium text-blue-700">Хүн нэмэх</span>
        </Link>

        <Link to="/Gemini" className="menu-link border-b-4 pb-2">
          <span className="text-lg font-medium text-blue-700">Чатбот</span>
        </Link>

        <Link to="/Circle" className="menu-link border-b-4 pb-2">
          <span className="text-lg font-medium text-blue-700">Одоо байгаа өрөө</span>
        </Link>

        <Link to="/Pro" className="menu-link border-b-4 pb-2">
          <span className="text-lg font-medium text-blue-700">Миний профайл</span>
        </Link>

        <Link to="/" className="menu-link border-b-10 w-full pb-2">
          <span className="text-lg font-medium text-blue-700">Миний өрөөнүүд</span>
        </Link>

        <Link to="/Map" className="menu-link text-red-700 border-b-4 pb-2">
          <span className="text-lg font-medium">Бүх мэдээллээ устгах</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
