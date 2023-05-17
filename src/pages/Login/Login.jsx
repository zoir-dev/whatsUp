import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import "./style.scss";
import { ArrowForward } from "@mui/icons-material";
import Modall from "./Modal";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [phone, setPhone] = useState();
  const [open, setOpen] = useState(false);
  const user = false;
  useEffect(() => {
    if (user) {
      navigate("/home");
    }
  }, [location.pathname]);
  const handleLogin = () => {
    setOpen(true);
  };
  return (
    <div className="login_div">
      <h1>Enter your phone number</h1>
      <p>
        WhatsApp will need to verify your account.{" "}
        <a href="">What's my number?</a>
      </p>
      <div>
        <PhoneInput
          country={"ru"}
          value={phone}
          onChange={(e) => setPhone(e)}
        />
      </div>
      <button className="next_button" onClick={handleLogin}>
        Next <ArrowForward />
      </button>
      <Modall open={open} setOpen={setOpen} />
    </div>
  );
};

export default Login;
