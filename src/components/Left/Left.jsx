import "./style.scss";
import {
  AutorenewSharp,
  Close,
  FilterList,
  Groups,
  Lock,
  Message,
  MoreVert,
  Search,
} from "@mui/icons-material";
import { useEffect, useState } from "react";
import { data } from ".";
import Chats from "../Chats/Chats";
const Left = ({ chat, setChat }) => {
  const [search, setSearch] = useState("");
  const filteredChats = () => {
    if (search)
      return data.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase())
      );
    return data;
  };

  return (
    <div className="left_div">
      <div className="header">
        <div className="user_info">
          <img src="/public/assets/user.png" alt="user_img" />
          <div>
            <h3>Zoyirjon</h3>
            <span>+998912838413</span>
          </div>
        </div>
        <div>
          <Groups />
          <AutorenewSharp />
          <Message />
          <MoreVert />
        </div>
      </div>
      <div className="search_div">
        <div>
          <Search />
          <input
            type="text"
            placeholder="Search or start new chat"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          {search && <Close onClick={() => setSearch("")} />}
        </div>
        <FilterList />
      </div>
      <Chats
        data={filteredChats()}
        chat={chat}
        setChat={setChat}
        setSearch={setSearch}
      />
      <div className="chats_footer">
        <Lock />{" "}
        <p>
          Your personal messages are <a href="">end-to-end encrypted</a>
        </p>
      </div>
    </div>
  );
};

export default Left;
