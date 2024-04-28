import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import QRCode from 'qrcode.react'; // Import QRCode component

const CreateMem = () => {
  const [showQRCode, setShowQRCode] = useState(false); // State to manage QR code visibility

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-lg bg-white h-full rounded-lg shadow-md overflow-hidden">
        <div className="px-4 py-2 border-b h-full border-gray-200">
          <h1 className="text-xl font-medium text-gray-800">Davaasambuu B'-гийн өрөө </h1>
          <div className="flex items-center space-x-1"></div>
        </div>
        <div className="px-4 py-4 text-gray-700">
          <p>App name : гэр бүлийнхээ хүмүүсийн байршлыг хархад амар юм.</p>
          <p>Та кодоо гэр бүлийнхээ гишүүд рүү илгээнэ үү, Мөн тэднээс энэ өрөөнд орох хүсэлтэй байгааг нь асуугаарай</p>
        </div>
        <div className="px-4 py-2 text-center font-medium text-xl text-blue-500 border-t border-gray-200">
          <span>Гэр бүлийнхээ гишүүдийг урихын тулд өөрийн кодыг хуваалцна уу</span>
        </div>
        <div className="text-center px-4 py-4">
          <span className="text-3xl font-bold text-blue-500">JUNXKB</span>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center py-4 space-y-2 md:space-y-0 md:space-x-4">
          {/* Button to toggle QR code visibility */}
          <button
            className="px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-md shadow-sm hover:bg-blue-700"
            onClick={() => setShowQRCode(!showQRCode)}
          >
            {showQRCode ? "Hide QR Code" : "QR code харуулах"}
          </button>
          <button className="px-4 py-2 text-sm font-medium text-center text-white-500 hover:text-gray-700">
            Линк хуваацах
          </button>
        </div>
        {/* Render QR code if showQRCode is true */}
        {showQRCode && (
          <div className="flex items-center justify-center py-4">
            <QRCode value="https://example.com" /> {/* Replace value with your link */}
          </div>
        )}
        <div className="flex items-center justify-center py-4">
          <Link to="/Menu">
            <button className="px-4 py-2 text-sm font-medium text-center text-white-500 hover:text-gray-700">
              Болсон
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateMem;
