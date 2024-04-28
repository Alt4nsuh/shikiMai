import React, { useState } from "react";
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";

function JoinRoom() {
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const handleLoginButtonClick = () => {
    // Handle login button click event here
    // For example, toggle login modal or navigate to login page
  };
  return (
    <div className="w-full overflow-hidden">
      <Header
        open={open}
        setOpen={setOpen}
        activeItem={0}
        route={route}
        setRoute={setRoute}
        onLoginButtonClick={handleLoginButtonClick}
      />
      <div className="w-[95%] m-auto  800px:h-[90vh] translate-y-0 opacity-100 transition-all duration-1000 ease-in-out">
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
              <Link className="text-blue-500 hover:underline" to="/create-room">
                Create Circle
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JoinRoom;
