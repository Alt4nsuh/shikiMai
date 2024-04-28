import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import useTitle from "../../hooks/useTitle";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom"
import family from "../../images/family.png";
// import Loader from "../../components/Loader";

const Home = () => {
  useTitle(`Home`);
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");

  const handleLoginButtonClick = () => {
    // Handle login button click event here
    // For example, toggle login modal or navigate to login page
  };

  return (
    <>
      <div className="w-full overflow-hidden">
        <Header
          open={open}
          setOpen={setOpen}
          activeItem={0}
          route={route}
          setRoute={setRoute}
          onLoginButtonClick={handleLoginButtonClick}
        />
        <div className="w-[95%] m-auto flex flex-col justify-center items-center h-[80vh] 800px:h-[90vh] translate-y-0 opacity-100 transition-all duration-1000 ease-in-out">
          <div className="200px:w-[70%] 400px:w-[50%] 600px:w-[40%] 1000px:w-[35%] flex w-full justify-center">
            <Link to="/">
              <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full">
                <img
                  src={family}
                  alt=""
                  className="w-65 md:w-128 lg:w-48 object-cover rounded-full"
                />
              </div>
            </Link>
          </div>
          <h1 className="text-center font-Poppins text-[25px] leading-[35px] sm:text-3xl lg:text-4xl dark:text-white 800px:!leading-[60px] text-white font-extrabold tracking-tight">
            {`Монголын улсад тулгамдаж буй хүүхдийн`}
            <span className="text-gradient"></span>
            <br />
            <span className="text-gradient">Аюулгүй байдал</span>
            {`-ийг хангах систем`}
          </h1>
          <br />
          <br />
          <div className="grid grid-cols-1 gap-[20px] md:grid-cols-2 md:gap-[25px] lg:grid-cols-3 lg:gap-[25px] xl:grid-cols-3 xl:gap-[35px] mb-12 border-0"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
