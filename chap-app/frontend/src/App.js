import { useState } from "react";
import "./App.css";
import io from "socket.io-client";
import Chat from "./components/Chat";

const socket = io.connect("http://localhost:4004");
function App() {
  console.log(socket);
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [showChat, setShowChat] = useState(false);

  const joinRoom = () => {
    if (name !== "" && room !== "") {
      socket.emit("join", room);
      setShowChat(true);
    }
  };
  return (
    <div className="App">
      {!showChat ? (
        <div className="joinChatContainer">
          <h2>Join Chat </h2>
          <input
            type="text"
            placeholder="username.."
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
      ) : (
        <Chat socket={socket} name={name} room={room} />
      )}
    </div>
  );
}

export default App;
