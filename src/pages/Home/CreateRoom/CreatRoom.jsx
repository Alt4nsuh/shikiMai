import React from 'react'

function CreatRoom() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center font-bold text-2xl mb-4">
        Do you want to join a Circle?
      </div>
      <div className="flex justify-center">
        <input
          type="text"
          className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Enter your invite code"
        />
      </div>
      <div className="text-center mt-4 text-gray-500">
        <p>Get the code from the person creating your family's Circle</p>
      </div>
      <div className="flex justify-center mt-8">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
          Join Circle
        </button>
      </div>
      <div className="text-center mt-4 text-gray-500">
        <p>
          Do not have any code?
          <a className="text-blue-500 hover:underline" href="/sukheegiinMap">
            Create Circle
          </a>
        </p>
      </div>
    </div>
  )
};

export default CreatRoom