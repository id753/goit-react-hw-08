import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";

const LoginForm = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  // 10
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (values, options) => {
    console.log(values);
    // 10 n authslice
    dispatch(login(values))
      // после login переход на хоум
      .unwrap()
      .then(() => navigate("/contacts"));
    options.resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        // 10 n auth slice 11
        onSubmit={handleSubmit}
      >
        <Form>
          <h3>Login</h3>
          <label>
            <span>Email:</span>
            <Field name="email" />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" />
          </label>
          <button type="submit">Login</button>
          <p>
            You do not have account?
            <Link to="/register"> Lets create one!</Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default LoginForm;
