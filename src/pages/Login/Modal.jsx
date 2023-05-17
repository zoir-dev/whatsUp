import { ArrowForward, Close } from "@mui/icons-material";
import { Modal } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const Modall = ({ open, setOpen }) => {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/home')
  }
  return <Modal open={open}>
    <div className="login_modal">
      <div>
        <Close onClick={() => setOpen(false)} />
      </div>
      <div className="input_div">
        <h2>Enter confirmation code</h2>
        <input type="text" placeholder="Enter confirmation code" />
      </div>
      <button className="next_button" onClick={handleLogin}>
        Next <ArrowForward />
      </button>
    </div>
  </Modal>;
};

export default Modall;
