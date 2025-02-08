import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";
import * as Yup from "yup";

const RegistrationForm = () => {
  const initialValues = {
    password: "",
    email: "",
    name: "",
  };
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be less than 50 characters")
      .required("Name is required"),

    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),

    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    // .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    // .matches(/[a-z]/, "Password must contain at least one lowercase letter")
    // .matches(/\d/, "Password must contain at least one number")
    // .matches(
    //   /[@$!%*?&#]/,
    //   "Password must contain at least one special character (@$!%*?&#)"
    // ),
  });

  // 7
  const dispatch = useDispatch();
  // 8 n authopertion 9
  const navigate = useNavigate();
  // 7 Этот код отправляет данные (например, email и пароль) в асинхронный registerThunk, который делает запрос на сервер для регистрации пользователя.
  const handleSubmit = (value, options) => {
    dispatch(register(value))
      // 8 после регистрации переход на хоум
      .unwrap()
      .then(() => navigate("/contacts"));

    options.resetForm();
  };

  return (
    <div className={s.container}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        // 7
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <h3 className={s.form_title}>Registration</h3>
            <label>
              <span className={s.span}>Name:</span>
              <Field name="name" className={s.input} />
            </label>
            <div className={s.error_message}>
              {errors.name && touched.name && errors.name}
            </div>
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
              Register
            </button>
            <p className={s.text}>
              You already have account?
              <Link to="/login" className={s.link}>
                Login!
              </Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default RegistrationForm;
