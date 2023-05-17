import { useState } from "react";
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

const Right = ({ chat }) => {
  const [message, setMessage] = useState("");
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setMessage("");
    }
  };
  const sendMessage = (e) => {
    setMessage("");
    e.preventDefault();

    // Regex expression to remove all characters which are NOT alphanumeric
    // let number = mobileNumber.replace(/[^\w\s]/gi, "").replace(/ /g, "");

    // Appending the phone number to the URL
    let url = `https://web.whatsapp.com/send?phone=${+998332838413}`;
    url += `&text=${encodeURI(message)}&app_absent=0`;

    // Open our newly created URL in a new tab to send the message
    window.open(url);
  };
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
