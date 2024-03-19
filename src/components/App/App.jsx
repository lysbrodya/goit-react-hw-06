import "./App.module.css";
import { useState, useEffect } from "react";
import listOfContacts from "../../../ContactList.json";
import ContactList from "../ContactList/ContactList";
import SearchBox from "../SearchBox/SearchBox";
import ContactForm from "../ContactForm/ContactForm";
const App = () => {
  const [contacts, setContacts] = useState(() => {
    const savedObject = window.localStorage.getItem("saved-feedback");
    if (savedObject !== null) {
      return JSON.parse(savedObject);
    }
    return listOfContacts;
  });
  // const [filter, setFilter] = useState("");

  const addContact = (newContact) => {
    setContacts((prevContacts) => {
      return [...prevContacts, newContact];
    });
  };

  useEffect(() => {
    window.localStorage.setItem(
      "saved-feedback",
      JSON.stringify([...contacts])
    );
  }, [contacts]);

  // const filteredContacts = contacts.filter((contact) =>
  //   contact.name.toLowerCase().includes(filter.toLowerCase())
  // );
  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm onAdd={addContact} />
      <SearchBox />
      <ContactList />
    </div>
  );
};
export default App;
