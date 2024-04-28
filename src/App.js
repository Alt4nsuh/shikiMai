import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import RoomList from "./pages/Rooms/RoomList";
import CreateRoom from "./pages/Rooms/CreateRoom";
import JoinRoom from "./pages/Rooms/JoinRoom";
import RoomPage from "./pages/Rooms/RoomPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="rooms" element={<RoomList />} />
        <Route path="join-room" element={<JoinRoom />} />
        <Route path="create-room" element={<CreateRoom />} />
        <Route path="room/:id" element={<RoomPage />} />
        <Route path="room/:id" element={<RoomPage />} />
        <Route path="room/:id" element={<RoomPage />} />
        <Route path="room/:id" element={<RoomPage />} />
      </Route>
    </Routes>
  );
}

export default App;
