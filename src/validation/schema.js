import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup.string(),
    username: yup.string().min(4, "Username must be 4 characters long"),
    email: yup
      .string()
      .email("Must be a valid email address")
      .required("Must include email address"),
    password: yup
      .string()
      .required("Password is required")
      .min(5, "Password must be 5 characters long"),
    role: yup.string().required([true], "This is required"),
  });

  export default schema;