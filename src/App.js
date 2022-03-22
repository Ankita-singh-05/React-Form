import React from "react";
import { useState } from "react";

// Snackbar material ui
import IconButton from "@material-ui/core/IconButton";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
// CSS
import "./App.css";
// Component
import FormInput from "./components/FormInput.js";

const App = () => {
  // UserData
  const [values, setValues] = useState({
    username: "",
    email: "",
    feedback: "",
    password: "",
    confirmPassword: "",
  });

  // Firebase integration
  let name, value;
  const postUserData = (e) => {
    name = e.target.name;
    value = e.target.value;

    setValues({ ... values, [name]: value });
  };

  // Connecting with firebase server
  const submitData = async (e) => {
    e.preventDefault();
    const { username, email, feedback, password, confirmPassword } = values;

    if(username && email && feedback && password && confirmPassword){

    const res = await fetch(
      "https://reactformfirebase-21f0c-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          email,
          feedback,
          password,
          confirmPassword,
        }),
      }
    );

    if(res) {
      setValues({
        username: "",
        email: "",
        feedback: "",
        password: "",
        confirmPassword: "",
      })
      alert("Data Stored")
    }
    else{
      alert("Plz fill the data")
    }
  }
  };

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
      value: values.username,
      onChange: { postUserData },
      autoComplete: "off",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "It should be a valid email address!",
      label: "Email",
      required: true,
      value: values.email,
      onChange: { postUserData },
      autoComplete: "off",
    },
    {
      id: 3,
      name: "feedback",
      type: "textarea",
      placeholder: "How can we help?",
      label: "How can we help?",
      value: values.feedback,
      onChange: { postUserData },
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 6-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
      value: values.password,
      onChange: { postUserData },
    },
    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm Password",
      errorMessage: "Passwords don't match!",
      label: "Confirm Password",
      pattern: values.password,
      required: true,
      value: values.confirmPassword,
      onChange: { postUserData },
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // Snackbar
  const [open, setOpen] = React.useState(false);

  const handleToClose = (event, reason) => {
    if ("clickaway" == reason) return;
    setOpen(false);
  };

  const handleClickEvent = () => {
    setOpen(true);
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit} method="POST">
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
          />
        ))}
        <button
        onClick={ () => { handleClickEvent(); 
          submitData();
        }} >
          Submit
        </button>
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
                <CloseIcon
                  fontSize="small"
                  color="primary"
                  background-color="primary"
                />
              </IconButton>
            </React.Fragment>
          }
        />
      </form>
    </div>
  );
};

export default App;
