import React, { useState } from "react";
import Signup from "./Signup";
import Homepage from "./Homepage";

const Form = () => {
  const [formSubmit, setFormSubmit] = useState(false);

  const submitForm = () => {
    setFormSubmit(true);
  };
  return (
    <div>
      {!formSubmit ? <Signup submitForm={submitForm} /> : <Homepage />}
    </div>
  );
};

export default Form;
