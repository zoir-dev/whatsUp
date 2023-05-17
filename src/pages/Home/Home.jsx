import "./style.scss";
import Left from "../../components/Left/Left";
import Right from "../../components/Right/Right";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DefaultRight from "../../components/DefaultRight/DefaultRight";
const Home = () => {
  const [chat, setChat] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();
  const user = false;

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [location.pathname]);
  return (
    <div className="home_div">
      <Left chat={chat} setChat={setChat} />
      {chat.name ? <Right chat={chat} /> : <DefaultRight />}
    </div>
  );
};

export default Home;
