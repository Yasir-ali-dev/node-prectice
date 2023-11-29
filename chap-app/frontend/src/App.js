import { useState } from "react";
import "./App.css";
import io from "socket.io-client";

const socket = io.connect("http://localhost:4004");
function App() {
  console.log(socket);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (name !== "" && room !== "") {
      socket.emit("join", room);
    }
  };
  return (
    <div className="App">
      <h2>Join Chat </h2>
      <input
        type="text"
        placeholder="john.."
        onChange={(e) => {
          setName(e.target.value);
        }}
        value={name}
      />
      <input
        type="text"
        placeholder="room.."
        onChange={(e) => {
          setRoom(e.target.value);
        }}
        value={room}
      />
      <button onClick={joinRoom}>Join Room</button>
    </div>
  );
}

export default App;
