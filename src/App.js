import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home/Home";
import RoomList from "./pages/Rooms/RoomList";
import CreateRoom from "./pages/Rooms/CreateRoom";
import JoinRoom from "./pages/Rooms/JoinRoom";
import RoomPage from "./pages/Rooms/RoomPage";
import Lalar from "./pages/Home/CreateRoom/Lalar";
import Pro from "./pages/CreateMem/pro";
import Menu from "./pages/CreateMem/Menu";
import CreateMem from "./pages/CreateMem/CreateMem";
import Circle from "./pages/CreateMem/Circle";
import Gemini from "./pages/CreateMem/Gemini";
import Safety from "./pages/CreateMem/Safety";
import Login from "./components/Auth/Login";
import Map from "./pages/Places/MapPlace";
import SafeZone from "./pages/Places/SafeZone";










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
        <Route path="lalar" element={<Lalar />} />
        <Route path="pro" element={<Pro />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="Create" element={<CreateMem/>} />
        <Route path="Circle" element={<Circle/>} />
        <Route path="Gemini" element={<Gemini/>} />
        <Route path="Safety" element={<Safety/>} />
        <Route path="Login" element={<Login/>} />
        <Route path="Map" element={<Map/>} />
        <Route path="SafeZone" element={<SafeZone/>} />

        <Route path="room/:id" element={<RoomPage />} />
      </Route>
    </Routes>
  );
}

export default App;
