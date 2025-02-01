import s from "./Contact.module.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaUserGraduate } from "react-icons/fa";

// 6 из слайс.джс имена редьюсеров
// import {deleteContact, addContact} from '../../redux/contactsSlice';
// 7
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";
// import { deleteContact } from "../../redux/contactsSlice";

const Contact = ({ name, number, id }) => {
  // 7
  const dispatch = useDispatch();

  return (
    <div className={s.div}>
      <div className={s.text}>
        <p>
          <FaUserGraduate /> {name}
        </p>
        <p>
          <FaPhoneAlt /> {number}
        </p>
      </div>
      <button
        className={s.btn_delete}
        // onClick={() => onDeleteContact(id)}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
};

export default Contact;
