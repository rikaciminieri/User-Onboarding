import * as yup from "yup";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Must enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .required("No password provided.")
    .min(8, "Password is too short - should be 8 chars minimum.")
    .matches(/[a-zA-Z]/, "Password can only contain Latin letters."),
  gender: yup.string().required("You must provide your gender"),
  status: yup
    .string()
    .oneOf(["Noob", "Apprentice", "Advanced", "Wizard"], "Status is required"),
  terms: yup.boolean()
  .oneOf([true], "Must agree to terms and service")
  .required()
});

export default schema