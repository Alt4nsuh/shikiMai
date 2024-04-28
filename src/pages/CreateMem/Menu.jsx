import React from 'react';
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-100 p-4 rounded-lg shadow-md">
      <div className="flex flex-col space-y-4">
        <div className="text-xl font-medium text-gray-800">Цэс</div>
        
        <Link to="/Create" className="menu-link">
          <span className="text-base font-normal">Хүн нэмэх</span>
        </Link>

        <Link to="/Gemini" className="menu-link">
          <span className="text-base font-normal">Чатбот</span>
        </Link>

        <Link to="/Circle" className="menu-link">
          <span className="text-base font-normal">Одоо байгаа өрөө</span>
        </Link>

        <Link to="/Pro" className="menu-link">
          <span className="text-base font-normal">Миний профайл</span>
        </Link>

        <Link to="/" className="menu-link">
          <span className="text-base font-normal">Миний өрөөнүүд</span>
        </Link>

        <Link to="/" className="menu-link text-red-500">
          <span className="text-base font-normal">Бүх мэдээллээ устгах</span>
        </Link>
      </div>
    </div>
  );
}

export default Menu;
