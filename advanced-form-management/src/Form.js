import React from "react";

const initialFormErrors = {
  name: "",
  email: "",
  password: "",
  gender: "",
  status: "",
  terms: "",
};

function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target;
    const valueToUse = type === "checkbox" ? checked : value;

    change(name, valueToUse);
  };
  return (
    <form onSubmit={onSubmit}>
      <div
        className={
          errors !== initialFormErrors
            ? "bg-red-200 border-red-600 text-red-600 border-l-4 p-4"
            : "invisible"
        }
      >
        <div id="nameError">{errors.name}</div>
        <div id="emailError">{errors.email}</div>
        <div id="passwordError">{errors.password}</div>
        <div id="genderError">{errors.gender}</div>
        <div id="statusError">{errors.status}</div>
        <div id="termsError">{errors.terms}</div>
      </div>
      <div>
          {/* TEXT INPUTS */}
          <div className="my-3">
          <label>
            Name
            <input
              type="text"
              name="name"
              value={values.username}
              onChange={onChange}
              placeholder="First and Last Name"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </label>
          </div>
          <div className="my-3">
          <label>
            Email
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={onChange}
              placeholder="Email"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </label>
          </div>
    
          <label>
            Password
            <input
              type="password"
              name="password"
              value={values.password}
              onChange={onChange}
              placeholder="Enter a password"
              className="rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
            />
          </label>
        {/* RADIO BUTTONS */}
        <label className="mt-3 inline-flex items-center">
          Female
          <input
            type="radio"
            name="gender"
            value="Female"
            checked={values.gender === "Female"}
            onChange={onChange}
            className="h-5 w-5 text-red-600 mx-3"
          />
        </label>
        <label className="inline-flex items-center">
          Male
          <input
            type="radio"
            name="gender"
            value="Male"
            checked={values.gender === "Male"}
            onChange={onChange}
            className="h-5 w-5 text-red-600 mx-3"
          />
        </label>

        {/* DROPDOWN */}
        <div className="mt-2">
        <label className="flex flex-col text-gray-700 font-bold">
          Status
          <select
            onChange={onChange}
            value={values.status}
            name="status"
            className="block w-52 py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary-500 focus:border-primary-500"
          >
            <option value="">- Select an option -</option>
            <option value="Noob">Noob</option>
            <option value="Apprentice">Apprentice</option>
            <option value="Advanced">Advanced</option>
            <option value="Wizard">Wizard</option>
          </select>
        </label>
        </div>

        {/* CHECKBOX */}
        <div className="py-3">
        <label>
          Agree to terms and conditions
          <input
            type="checkbox"
            name="terms"
            checked={values.terms}
            onChange={onChange}
            className="mx-3"
          />
        </label>
        </div>
      </div>
      <button
        disabled={disabled}
        className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
      >
        Submit
      </button>
    </form>
  );
}

export default Form;
