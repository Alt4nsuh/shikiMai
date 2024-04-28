import React from "react";
import { Link } from "react-router-dom"
const ExploreCourse = () => {
  return (
    <div className="w-[95%] m-auto flex justify-center items-center h-[20] 800px:h-[50vh] translate-y-0 opacity-100 transition-all duration-1000 ease-in-out">
      <div className="w-[90%] 800px:w-[80%]">
        <h1 className="font-extrabold text-[25px] leading-[35px] sm:text-3xl lg:text-5xl tracking-tight text-center text-white font-Poppins 800px:!leading-[60px] ">
          Family <span className="text-gradient">360</span>{" "}
          <br/>
        </h1>
        <div className="pt-2"></div>
        <div className="w-full text-center">
          <p className="800px:block hidden font-poppins 800px:text-[22px] 800px:leading-[32px] text-[16px] leading-[23px] font-normal text-[#A3B3BC] mt-5 mb-10">
            We are providing this system for your child's safety
          </p>
          <div className="flex w-full justify-center">
            <Link to="/">
              <div className="flex flex-row justify-center items-center py-3 px-6 rounded-full cursor-pointer bg-[#2190ff] min-h-[45px] w-full">
                <img src="family.png" alt="" className="w-65 md:w-128 lg:w-48 object-cover rounded-full" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ExploreCourse;
