import { Lock } from "@mui/icons-material";
import "./style.scss";
const DefaultRight = () => {
  return (
    <div className="default_right">
      <div></div>
      <div className="content">
        <img src="/public/assets/main_logo.png" alt="" />
        <h1>WhatsApp Web</h1>
        <p>
          Send and receive messages without keeping your phone online.
          <br />
          Use WhatsApp on up to 4 linked devices and 1 phone at the same time.
        </p>
      </div>
      <p>
        <Lock /> End-to-end encrypted
      </p>
    </div>
  );
};

export default DefaultRight;
