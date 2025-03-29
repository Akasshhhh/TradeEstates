import { Server } from "socket.io";
import dotenv from "dotenv";
dotenv.config();

const io = new Server({
  cors: {
    origin: "*",
  },
});

let onlineUser = [];

const addUser = (userId, socketId) => {
  const userExits = onlineUser.find((user) => user.userId === userId);
  if (!userExits) {
    onlineUser.push({ userId, socketId });
    console.log(`User added: ${userId} with socket ID: ${socketId}`);
  }
};

const removeUser = (socketId) => {
  onlineUser = onlineUser.filter((user) => user.socketId !== socketId);
  console.log(`User removed with socket ID: ${socketId}`);
};

const getUser = (userId) => {
  return onlineUser.find((user) => user.userId === userId);
};

io.on("connection", (socket) => {
  console.log(`User connected: ${socket.id}`);

  socket.on("newUser", (userId) => {
    addUser(userId, socket.id);
  });

  socket.on("sendMessage", ({ receiverId, data }) => {
    const receiver = getUser(receiverId);
    if (receiver) {
      io.to(receiver.socketId).emit("getMessage", data);
      console.log(`Message sent to ${receiverId}:`, data);
    } else {
      console.log(`Receiver not found or not online: ${receiverId}`);
    }
  });

  socket.on("disconnect", () => {
    console.log(`User disconnected: ${socket.id}`);
    removeUser(socket.id);
  });
});

io.listen(process.env.PORT || 4000, () => {
  console.log("Socket.IO server listening on port 4000");
});
console.log("Socket.IO server listening on port 4000");
