import React from 'react'

function CreatRoom() {
  return (
    <div className="container mx-auto h-full px-4 py-8">
      <div className="text-center font-bold text-2xl mb-4">
        Do сдгфсдф 
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter your invite code"
        />
      </div>
      <div className="text-center mt-4 text-gray-500">
        <p>Get the code from the person creасдфкасджфх family's Circle</p>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-full hover:bg-blue-full text-white font-bold py-2 px-4 rounded-md">
          Join Circle
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <p>
          Do not have any code?
          <a className="text-blue-500 hover:underline" href="/sukheegiinMap">
            сдфнг 
          </a>
        </p>
      </div>
    </div>
  )
};

export default CreatRoom