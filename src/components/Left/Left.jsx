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
import axios from "axios";
import Modall from "./Modal";
import { throttle } from "lodash";
const Left = ({ chat, setChat }) => {
  const [search, setSearch] = useState("");
  const [chats, setChats] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [open, setOpen] = useState(false);
  const filteredChats = () => {
    if (search)
      return data.filter((d) =>
        d.name.toLowerCase().includes(search.toLowerCase())
      );
    return data;
  };
  const getContacts = throttle(() => {
    axios
      .get(
        `https://api.green-api.com/waInstance1101822090/GetContacts/87b8fb91f77f4ec780f8820daea7f87733a94ea55d084b5594`
      )
      .then((response) => {
        setContacts(response.data);
      })
      .catch((error) => {
        // console.error("Failed to get contacts", error);
      });
  });
  useEffect(() => {
    getContacts();
  }, [open]);
  const getChats = throttle(() => {
    axios
      .get(
        `https://api.green-api.com/waInstance1101822090/getChats/87b8fb91f77f4ec780f8820daea7f87733a94ea55d084b5594`
      )
      .then((response) => {
        setChats(response.data);
      })
      .catch((error) => {
        // console.error("Failed to get chats", error);
      });
    console.log(chats);
  });
  useEffect(() => {
    getChats();
  }, [chats]);

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
      <div className="contacts" onClick={() => setOpen(true)}>
        <Message />
      </div>
      <Modall open={open} setOpen={setOpen} data={contacts} />
    </div>
  );
};

export default Left;
