import { Add, Close } from "@mui/icons-material";
import { Modal } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const Modall = ({ open, setOpen, data }) => {
  const [contacts, setContacts] = useState([]);
  // console.log(data);

  // const getContactInfo = async () => {
  //   const apiUrl = `https://api.green-api.com/waInstance1101822090/getContactInfo/87b8fb91f77f4ec780f8820daea7f87733a94ea55d084b5594`;
  //   const headers = {
  //     "Content-Type": "application/json",
  //   };

  //   const requestBody = {
  //     chatId: "998903602760@c.us",
  //   };

  //   const response = await axios.get(apiUrl, {
  //     headers: headers,
  //     data: requestBody,
  //   });
  //   console.log(response);
  // };
  // useEffect(() => {
  //   // for (let index = 0; index < data.length; index++) {
  //   getContactInfo();
  //   // }
  // }, [data, open]);

  return (
    <Modal open={open}>
      <div className="contacts_modal">
        <div className="contacts_title">
          <h2>Contacts</h2>
          <Close onClick={() => setOpen(false)} />
        </div>
        <div className="contacts">
          {data.length ? (
            data.map((d) => (
              <div className="contact" key={d.id}>
                <img src="/public/assets/user.png" alt="" />
                <p>{d.name}</p>
              </div>
            ))
          ) : (
            <div>No Contacts</div>
          )}
        </div>
        <div className="addContact">
          <Add />
        </div>
      </div>
    </Modal>
  );
};

export default Modall;
