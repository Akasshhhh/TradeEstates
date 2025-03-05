import { useContext, useState } from "react";
import "./chat.scss";
import { SocketContext } from "../../context/SocketContext";

function Chat({chats}) {
  const [chat, setChat] = useState(true);
  const {socket} = useContext(SocketContext)
  console.log(chats)

  const testSocket = () => {
    socket.emit("test", "Hello")
  }

  return (
    <div className="chat">
      <div className="messages">
        <h1>Messages</h1>
        <button onClick={testSocket}>Test</button>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
        <div className="message">
          <img
            src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt=""
          />
          <span>John Doe</span>
          <p>Lorem ipsum dolor sit amet...</p>
        </div>
      </div>
      {chat && (
        <div className="chatBox">
          <div className="top">
            <div className="user">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
              />
              John Doe
            </div>
            <span className="close" onClick={()=>setChat(null)}>X</span>
          </div>
          <div className="center">
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
            <div className="chatMessage own">
              <p>Lorem ipsum dolor sit amet</p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="bottom">
            <textarea></textarea>
            <button>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
