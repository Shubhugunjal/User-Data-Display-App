import React, { useState } from "react";
import "./Card.css";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const Card = ({ name, id, contact, address, email, companyName, username }) => {
  const [modal, setModal] = useState(false);

  return (
    <div>
      <Modal isOpen={modal} toggle={() => setModal(!modal)}>
        <ModalHeader toggle={() => setModal(!modal)}>More Details</ModalHeader>
        <ModalBody className="inner_container">
          <div className="container">
            <label>
              <b>ID:</b> {id}
            </label>
            <label>
              <b>Name:</b> {name}
            </label>

            <label>
              <b>Username: </b>
              {username}
            </label>

            <label>
              <b>Email:</b> {email}
            </label>

            <label>
              <b>Address: </b>
              {address.street}, {address.suite}, {address.city},
              {address.zipcode}
            </label>

            <label>
              <b>Company Name:</b> {companyName}
            </label>
          </div>
        </ModalBody>
      </Modal>
      <div className="card">
        <div className="card_content">
          <label>{name}</label>

          <label>
            <b>Contact No: </b> {contact}
          </label>

          <label>
            <b>City:</b> {address.city}
          </label>

          <button className="view-button" onClick={() => setModal(true)}>
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
