import React, { useEffect, useState } from "react";
import { useCreateRoomMutation } from "../../features/room/roomApi";
import { useNavigate } from "react-router-dom";
import { CircleLoader } from "react-spinners";

function CreateRoom() {
  const navigate = useNavigate();
  const [createRoom, { isSuccess, data }] = useCreateRoomMutation();
  const [open, setOpen] = useState(false);
  const [route, setRoute] = useState("Login");
  const [name, setName] = useState("");
  const [curSet, setCurSet] = useState(false);
  const [location, setLocation] = useState(0);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        setLocation({
          location: { lat: latitude, lng: longitude },
        });
        setCurSet(true);
      },
      (error) => {
        console.error("Error getting geolocation:", error);
        // Handle error here, such as displaying a message to the user
      }
    );
  }, [setCurSet, setLocation]);

  const handleCreateRoom = () => {
    createRoom(name, location).then((data) => navigate(`/room/${data.data.room._id}`));
  };

  return (
    <div className="h-screen bg-gray-100 flex justify-center items-center">
      {!curSet ? (
        <CircleLoader color="#36D7B7" loading={true} />
      ) : (
        <div className="w-full overflow-hidden">
          <div className="w-[95%] m-auto  800px:h-[90vh] translate-y-0 opacity-100 transition-all duration-1000 ease-in-out">
            <div className="container mx-auto px-4 py-8">
              <div className="text-center font-bold text-2xl mb-4">
               Өрөөний кодыг оруулна уу?
              </div>
              <div className="flex justify-center">
                <input
                  value={name}
                  type="text"
                  className="border border-gray-300 rounded-md px-4 py-2 w-full focus:outline-none focus:ring-1 focus:ring-blue-500 text-black"
                  placeholder="Өрөөний код"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="text-center mt-4 text-gray-500">
                <p>
                  Өрөө үүсгэсэн хүнээс авсан кодоо оруулна уу?
                </p>
              </div>
              <div className="flex justify-center mt-8">
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
                  onClick={handleCreateRoom}
                >
                  Өрөө үүсгэх
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CreateRoom;
