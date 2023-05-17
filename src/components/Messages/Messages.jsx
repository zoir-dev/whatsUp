import "./style.scss";
import { toTime } from "../../useFulls/time";
import { Done } from "@mui/icons-material";
const Messages = ({ messages }) => {
  return (
    <div className="messages_div">
      {messages
        .sort((a, b) => b.time - a.time)
        .map((m) => (
          <div
            className={
              m.sender === "+998912838413" ? "sent_message" : "message"
            }
            key={m.id}
          >
            <div className="message_div">
              <p>{m.message}</p>
              <div>
                <span>{toTime(m.time)}</span>
                <Done />
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Messages;
