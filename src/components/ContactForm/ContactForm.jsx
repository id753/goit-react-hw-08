import { Field, Form, Formik } from "formik";
import s from "./ContactForm.module.css";
import * as Yup from "yup";

// 10 из слайс.джс имена редьюсеров
// import { addContact } from "../../redux/contactsSlice";
// import { changeFilter} from '../../redux/filtersSlice';
// 11
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contacts/operations";

// Валідація для форми через Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .max(50, "Name must be less than 50 characters")
    .required("Name is required"),
  number: Yup.string()
    .matches(
      /^\+?\d{1,3}[-.\s]?\(?\d{1,4}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,4}$/,
      "Invalid phone number"
    )
    .required("Phone number is required"),
});

const ContactForm = () => {
  // 12
  const dispatch = useDispatch();
  // 13 Отримуємо список контактів із Redux-стану
  // const contacts = useSelector((state) => state.contacts.items);
  // const filter = useSelector((state) => state.filters.name);

  // Функція для перевірки дублікатів
  // const isDuplicate = (name) =>
  //   contacts.some((contact) => contact.name.toLowerCase() === name.toLowerCase());

  return (
    <div className={s.container}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        onSubmit={(values, { resetForm }) => {
          // const { name, number } = values;

          // Перевірка на дублікат
          //  if (isDuplicate(name)) {
          //   alert(`${name} is already in contacts.`);
          //   return;
          // }

          // Генерация уникального ID с использованием nanoid
          const newContact = {
            // id: nanoid(),
            name: values.name,
            number: values.number,
          };

          // Додавання контакту через onAddContact
          // onAddContact(newContact);

          // Відправка action для додавання нового контакту
          dispatch(addContact(newContact));

          resetForm();
        }}
      >
        {({ errors, touched }) => (
          <Form className={s.form}>
            <div>
              <label>
                <span className={s.span}>Name:</span>
                <Field className={s.input} type="text" name="name" />
              </label>
              <div className={s.error_message}>
                {errors.name && touched.name && errors.name}
              </div>
            </div>

            <div>
              <label>
                <span className={s.span}>Number:</span>
                <Field className={s.input} type="text" name="number" />
              </label>
              <div className={s.error_message}>
                {errors.number && touched.number && errors.number}
              </div>
            </div>

            <button
              className={s.form_btn}
              // onClick={() => dispatch(addContact(id))}

              type="submit"
            >
              Add contact
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;
