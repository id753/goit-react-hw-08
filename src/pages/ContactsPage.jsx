// ContactsPage.jsx
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { changeFilter } from "../redux/filters/slice";
import {
  addContact,
  deleteContact,
  fetchContacts,
} from "../redux/contacts/operations";
import { useEffect } from "react";

const ContactsPage = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);
  const filters = useSelector((state) => state.filters.name);

  // загрузка контактов, вызов и получение контактов с сервера
  // контакти будуть відображатися навіть після оновлення сторінки
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  // Фильтруем контакты по введенному имени
  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filters.toLowerCase())
  );

  const handleAddContact = (newContact) => {
    dispatch(addContact(newContact));
  };

  const handleDeleteContact = (id) => {
    dispatch(deleteContact(id));
  };

  const handleSearchChange = (event) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <div>
      <ContactForm onAddContact={handleAddContact} />
      <SearchBox value={filters} onChange={handleSearchChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContact={handleDeleteContact}
      />
    </div>
  );
};

export default ContactsPage;
