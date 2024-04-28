import React, { useState, useEffect } from "react";
import Header from "../../components/Header";
import useTitle from "../../hooks/useTitle";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";
import { useGetAllRoomsQuery } from "../../features/room/roomApi";
import { CircleLoader } from "react-spinners";
import RoomListItem from "../../components/Room/RoomListItem";
// import Loader from "../../components/Loader";

const RoomList = () => {
  useTitle(`Home`);
  const { isSuccess, data, refetch } = useGetAllRoomsQuery();
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    if (isSuccess) {
      setRooms(data.rooms);
    }
    refetch();
  }, [data, isSuccess, refetch]);

  const handleLoginButtonClick = () => {
    // Handle login button click event here
    // For example, toggle login modal or navigate to login page
  };

  return (
    <>
      {!isSuccess ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <CircleLoader color="#36D7B7" loading={true} />
        </div>
      ) : (
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
            {rooms &&
              rooms.map((item, index) => (
                <RoomListItem item={item} key={index} />
              ))}
            <Link to={`/join-room`}>
              <div className="w-[95%] mt-3 m-auto">
                <div className="w-fit px-5 py-2 pb-4 bg-slate-500 bg-opacity-20 backdrop-blur border border-[#ffffff1d] shadow-[bg-slate-700] rounded-lg shadow-sm">
                  <div className="flex text-3xl">+</div>
                </div>
              </div>
            </Link>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default RoomList;
