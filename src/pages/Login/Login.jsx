/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./style.scss";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [qr, setQr] = useState("");
  const [accState, setAccState] = useState("");
  const [isLoggedIn, setLoggedIn] = useState(false);
  const getQrCode = async () => {
    await axios
      .get(
        `https://api.green-api.com/waInstance1101822090/qr/87b8fb91f77f4ec780f8820daea7f87733a94ea55d084b5594`
      )
      .then((d) => setQr(d.data.message))
      .catch((error) => console.log(error));
  };
  const getAccountState = async () => {
    await axios
      .get(
        `https://api.green-api.com/waInstance1101822090/getStateInstance/87b8fb91f77f4ec780f8820daea7f87733a94ea55d084b5594`
      )
      .then((d) => setAccState(d.data.stateInstance))
      .catch((error) => console.log(error));

    setLoggedIn(true);
  };
  useEffect(() => {
    getAccountState();
  }, [location, isLoggedIn, qr]);
  useEffect(() => {
    getQrCode();
  }, [accState, qr]);
  useEffect(() => {
    if (isLoggedIn && accState === "authorized") {
      navigate("/home");
    }
    console.log(isLoggedIn);
  }, [location.pathname, accState, isLoggedIn]);

  return (
    <div className="login_div">
      <h1>Scan the QR code</h1>
      <p>
        Point your phone to this screen to capture the QR code and refresh the
        page
      </p>
      {qr !== "" && <img src={`data:image/png;base64,${qr}`} alt="qr_code" />}
    </div>
  );
};

export default Login;
