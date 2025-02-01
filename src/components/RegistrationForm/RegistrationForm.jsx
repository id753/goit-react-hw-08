import { Field, Form, Formik } from "formik";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../redux/auth/operations";
import s from "./RegistrationForm.module.css";
const RegistrationForm = () => {
  const initialValues = {
    password: "",
    email: "",
    name: "",
  };

  // 7
  const dispatch = useDispatch();
  // 8 n authopertion 9
  const navigate = useNavigate();
  // 7 Этот код отправляет данные (например, email и пароль) в асинхронный registerThunk, который делает запрос на сервер для регистрации пользователя.
  const handleSubmit = (value, options) => {
    dispatch(register(value))
      // 8 после регистрации переход на хоум
      .unwrap()
      .then(() => navigate("/"));

    options.resetForm();
  };

  return (
    <div>
      <Formik
        className={s.form}
        initialValues={initialValues}
        // 7
        onSubmit={handleSubmit}
      >
        <Form>
          <h3>Register</h3>
          <label>
            <span>Name:</span>
            <Field name="name" className={s.input} />
          </label>
          <label>
            <span>Email:</span>
            <Field name="email" className={s.input} />
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password" className={s.input} />
          </label>
          <button type="submit">Register</button>
          <p>
            You already have account?
            <Link to="/login"> Login! </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};
export default RegistrationForm;
