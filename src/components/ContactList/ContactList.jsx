import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

//  из слайс.джс имена редьюсеров
import {
  selectFilteredContacts,
  selectIsError,
  selectIsLoading,
} from "../../redux/contacts/selectors.js";
// import { changeFilter} from '../../redux/filtersSlice';
//
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations.js";

const ContactList = () => {
  // 3 n contactslice 4
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);
  //
  const filteredContacts = useSelector(selectFilteredContacts);
  // const handleFilterChange = (e) => {
  //   dispatch(setFilter(e.target.value));
  // };
  // 5 импорт селекторов
  const isError = useSelector(selectIsError);
  const isLoading = useSelector(selectIsLoading);

  // Отримуємо список контактів із Redux-стану
  // const contacts = useSelector((state) => state.contacts.items);
  // const filters = useSelector((state) => state.filters.name);

  // Фільтруємо контакти відповідно до введеного фільтра
  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filters.toLowerCase())
  // );

  return (
    <div>
      {isError && <h2>Something went wrong!</h2>}
      {isLoading && <h2>Loading...</h2>}

      <ul className={s.list}>
        {filteredContacts.map((contact) => (
          <li key={contact.id}>
            <Contact
              name={contact.name}
              number={contact.number}
              id={contact.id}
              onDeleteContact={() => dispatch(deleteContact(contact.id))} // вызываем экшн для удаления
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
