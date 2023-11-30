const express = require("express");
const { createServer } = require("http");
const { Server } = require("socket.io");
const cors = require("cors");
const app = express();
const httpServer = createServer(app);

app.use(cors());

const io = new Server(httpServer, {
  cors: { origin: "http://localhost:3001" },
});

io.on("connection", (socket) => {
  console.log(socket.id);

  socket.on("join", (data) => {
    socket.join(data);
    console.log(`user joined ${socket.id} with room id ${data}`);
  });
  socket.on("send_message", (data) => {
    socket.to(data.room).emit("recieve_message", data);
  });

  socket.on("disconnect", () => {
    console.log(" user disconnected " + socket.id);
  });
});

const port = 4004;
httpServer.listen(port, () => {
  console.log(`app is listening to the port ${port}...`);
});
