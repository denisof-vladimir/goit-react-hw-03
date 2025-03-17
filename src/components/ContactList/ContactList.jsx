import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";

export default function ContactList({PhoneBook, handleDeletePhone} )  {

    return (
        <ul className={css.phoneUl}>
	        {PhoneBook.map((phone) => {
                return (
                    <li key={phone.id}>
                        <Contact id={phone.id} 
                                name={phone.name}  
                                number={phone.number}
                                handleDeletePhone={handleDeletePhone} />
                    </li>
                    );
            })}
        </ul>

        
    );
  };
