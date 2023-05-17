import { Done } from "@mui/icons-material";
import "./style.scss";
import { toTime } from "../../useFulls/time";
const Chats = ({ data, chat, setChat, setSearch }) => {
  return (
    <div className="chats_div">
      {data?.map((m) => (
        <div
          key={m.id}
          onClick={() => {
            setChat(m), setSearch("");
          }}
          className={`chat ${chat.id === m.id && "active_chat"}`}
        >
          <img src={m.profile} alt="profile_img" />
          <div className="text_div">
            <div className="name_div">
              <h3>{m.name}</h3>
              <span>{toTime(m.date)}</span>
            </div>
            <div className="lastMessage_div">
              <Done />
              <p>{m.lastMessage}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Chats;
