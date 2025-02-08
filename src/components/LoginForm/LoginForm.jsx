import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../redux/auth/operations";
import s from "./LoginForm.module.css";
import * as Yup from "yup";

const LoginForm = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
  });
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
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // 10 n auth slice 11
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <h3 className={s.form_title}>Login</h3>
            <label>
              <span className={s.span}>Email:</span>
              <Field name="email" className={s.input} />
            </label>
            <div className={s.error_message}>
              {errors.email && touched.email && errors.email}
            </div>
            <label>
              <span className={s.span}>Password:</span>
              <Field name="password" type="password" className={s.input} />
            </label>
            <div className={s.error_message}>
              {errors.password && touched.password && errors.password}
            </div>
            <button type="submit" className={s.form_btn}>
              Login
            </button>
            <p className={s.text}>
              You do not have account?
              <Link to="/register" className={s.link}>
                Lets create one!
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default LoginForm;
