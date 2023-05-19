import { useEffect, useState } from "react";
import Messages from "../Messages/Messages";
import "./style.scss";
import {
  AttachFile,
  Mic,
  Mood,
  MoreVert,
  Search,
  Send,
} from "@mui/icons-material";
import { data } from ".";
import axios from "axios";

const Right = ({ chat }) => {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setMessage("");
    }
  };
  const sendMessage = async (e) => {
    setMessage("");
    const apiUrl = `https://api.green-api.com/waInstance1101822090/sendMessage/87b8fb91f77f4ec780f8820daea7f87733a94ea55d084b5594`;
    const headers = {
      "Content-Type": "application/json",
    };

    const requestBody = {
      chatId: "998912838413@c.us",
      message: message,
    };

    const response = await axios.post(apiUrl, {
      headers: headers,
      data: requestBody,
    });
    console.log(response);
  };
  const getMessages = () => {
    axios
      .post(
        `https://api.green-api.com/waInstance1101822090/GetChatHistory/87b8fb91f77f4ec780f8820daea7f87733a94ea55d084b5594`,
        {
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            chatId: "998912838413@c.us",
          },
        }
      )
      .then((response) => {
        setMessages(response.data);
        console.log(response);
      })
      .catch((error) => {
        // console.error("Failed to get contacts", error);
      });
  };
  useEffect(() => {
    getMessages();
  }, [chat]);
  return (
    <div className="right_div">
      <div className="header">
        <div className="name_div">
          <img src={chat.profile} alt="" />
          <h3>{chat.name}</h3>
        </div>
        <div className="icons">
          <Search />
          <MoreVert />
        </div>
      </div>
      <Messages messages={data} />
      <div className="footer">
        <Mood />
        <AttachFile className="attachFile" />
        <input
          type="text"
          placeholder="Type a message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        {message ? <Send onClick={sendMessage} /> : <Mic />}
      </div>
    </div>
  );
};

export default Right;
