import React from "react";
import ContactsForm from "../Component/ContactsForm";
import "../App.css";
import ContactsList from "../Component/ContactsList";
import { logout } from "../actions/authActions";
import { useDispatch } from "react-redux";
import { Button } from "react-bootstrap";

const Home = () => {
  const dispatch = useDispatch();
  return (
    <>
    <Button
          className="logout"
          variant="secondary"
          onClick={() => dispatch(logout(logout))}
        >
          Logout
        </Button>{" "}
      <div className="completeContact">
        
        <ContactsForm />
        <ContactsList />
      </div>
    </>
  );
};

export default Home;
