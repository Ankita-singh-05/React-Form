import "./App.css";
import { useState } from "react";

// Components
import FormInput from "./components/FormInput";

const App = () => {
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
      errorMessage: "",
      label: "Username",
    },
    {
      id: 2,
      name: "email",
      type: "text",
      placeholder: "Email",
      errorMessage: "",
      label: "Email",
    },
    {
      id: 3,
      name: "password",
      type: "text",
      placeholder: "Password",
      errorMessage: "",
      label: "Password",
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "text",
      placeholder: "Confirm Password",
      errorMessage: "",
      label: "Confirm Password",
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
    setValues({...values, [e.target.name]: e.target.value});
  }

  console.log(values)
  return (
    <>
      <div className="app">
        <form onSubmit={handleSubmit}>
          {/* <FormInput placeholder="Username" setUsername={setUsername} /> */}
          <h1>Let's level up your brand, together</h1>
          {inputs.map((input) => (
          <FormInput
          key={input.id}
          {...input} 
          value={values[input.name]}
          onChange = {onChange}
          />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </>
  );
};

export default App;
