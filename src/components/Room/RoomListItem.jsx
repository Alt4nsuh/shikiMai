import { Link } from "react-router-dom";

const RoomListItem = ({ item }) => {
  return (
    <Link to={`/room/${item._id}`}>
      <div className="w-[95%] mt-3 m-auto bg-slate-500 bg-opacity-20 backdrop-blur border border-[#ffffff1d] shadow-[bg-slate-700] rounded-lg p-3 shadow-sm">
        <div>{item.name}</div>
      </div>
    </Link>
  );
};

export default RoomListItem;