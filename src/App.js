import React from 'react';
import "./App.css";
import { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import Button from "@material-ui/core/Button";

// Components
import FormInput from "./components/FormInput";

const App = () => {

   // Snackbar
   const [open, setOpen] = React.useState(false);
  
   const handleToClose = (event, reason) => {
     if ("clickaway" == reason) return;
     setOpen(false);
   };
   
   const handleClickEvent = () => {
     setOpen(true);
   };


  const [values, setValues] = useState({
    username: " ",
    email: " ",
    password: " ",
    confirmPassword: " ",
    feedback: " ",
  });
  // const usernameRef = useRef();
  // UseRef update the changes but don't show it on the screen

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Username",
      errorMessage:
        "Username should be 3-16 characters and shouldn't include any special character!",
      label: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
    },
    {
      id: 5,
      name: "feedback",
      type: "textarea",
      placeholder: "How can we help?",
      errorMessage: "",
      label: "How can we help?",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

 
  // console.log(values);
  return (
    <>
      <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button onClick={handleClickEvent} >Submit</button>
        <Snackbar
        anchorOrigin={{
          horizontal: "right",
          vertical: "bottom",
        }}
        open={open}
        autoHideDuration={5000}
        message="Form Submitted Successfully!"
        onClose={handleToClose}
        action={
          <React.Fragment>
            <IconButton
              size="small"
              aria-label="close"
              color="inherit"
              onClick={handleToClose}
            >
              <CloseIcon fontSize="small" color="primary" background-color="primary" />
            </IconButton>
          </React.Fragment>
        }
      />
      </form>
    </div>
    </>
  );
};

export default App;
