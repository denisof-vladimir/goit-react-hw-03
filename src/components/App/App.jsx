import { useState, useId } from 'react'
import { nanoid } from 'nanoid'
import './App.css'
import ContactForm from '../ContactForm/ContactForm'
import SearchBox from '../SearchBox/SearchBox'
import ContactList from '../ContactList/ContactList'
import InitPhoneBook from "./PhoneBook.json";

function GetLocalStorage (key) {
  const saved = window.localStorage.getItem(key);
    if (saved !== null) {
      return JSON.parse(saved);
    }
    return InitPhoneBook;
}

function App() {
  const [PhoneBook, setPhoneBook] = useState(GetLocalStorage ("phone-Book"));
  const [inputSearch, setInputSearch] = useState("");


  const handleDeletePhone = (id) => {
     const phoneAfterDel = PhoneBook.filter((phone, index, arr) => {
        arr.push();
        return phone.id != id.id;
       });
         setPhoneBook(phoneAfterDel);
         window.localStorage.setItem("phone-Book", JSON.stringify(phoneAfterDel));
    };

  const handleSubmit = (values, actions) => {
    actions.resetForm();
    const isDuplicateNumber = PhoneBook.some((phoneItem) =>  phoneItem.number === values.number);
    if (isDuplicateNumber) {alert(` цей номер вже є y телефонній книзі.`);
        return;
      }
    const phoneForAdditive = {"id":nanoid(),  "name":values.name, "number":values.number}; 
    setPhoneBook(PhoneBook.concat(phoneForAdditive)); 
    console.log(PhoneBook);
    window.localStorage.setItem("phone-Book", JSON.stringify(PhoneBook.concat(phoneForAdditive)));
    };

 const handleSearch = (event) => {
    event.preventDefault();
    setInputSearch(event.target.value);}
   
  const filteredPhoneBook = PhoneBook.filter((phoneItem) =>
    phoneItem.name.toLowerCase().includes(inputSearch.toLowerCase())  );

  // console.log("filteredPhoneBook:", filteredPhoneBook);
    
  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm handleSubmit={handleSubmit}/>
        <SearchBox inputSearch={inputSearch} handleSearch={handleSearch}/>
        <ContactList PhoneBook={filteredPhoneBook} handleDeletePhone={handleDeletePhone} />
      </div>

          
      
    </>
  )
}


export default App
