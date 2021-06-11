import "./App.css";
import React, { useState, useEffect } from "react";
import Form from "./Form";
import User from "./User";
import axios from "axios";

import * as yup from "yup";
import schema from "./schema";

const initialFormValues = {
  // Text input //
  name: "",
  email: "",
  password: "",
  // Radio button //
  gender: "",
  // Dropdown //
  status: "",
  // Checkbox //
  terms: false,
};

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  gender: "",
  status: "",
  terms: "",
};

const initialUsers = [];
const initialDisabled = true;

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [disabled, setDisabled] = useState(initialDisabled);

  const postNewUser = (newUser) => {
    axios
      .post(`https://reqres.in/api/users`, newUser)
      .then((res) => {
        setUsers([...users, newUser]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setFormValues(initialFormValues);
      });
  };

  const inputChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setFormErrors({ ...formErrors, [name]: "" });
      })
      .catch((err) => {
        setFormErrors({ ...formErrors, [name]: err.message });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  useEffect(() => {
    schema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  const formSubmit = () => {
    const newUser = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      gender: formValues.gender.trim(),
      status: formValues.status.trim()
    };
    postNewUser(newUser);
  };

  return (
    <div className="flex flex-col mx-auto items-center max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
      <div className="flex flex-col items-center content-center">
        <h1 className="px-4 py-2 mb-4 text-2xl rounded-full text-indigo-600">
          Sign up
        </h1>
        <Form
          values={formValues}
          change={inputChange}
          submit={formSubmit}
          disabled={disabled}
          errors={formErrors}
        />
        <div>
          {users.map((user) => {
            return <User key={user.name} details={user} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
