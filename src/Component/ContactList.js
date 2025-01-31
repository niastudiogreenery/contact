import React from 'react';
import ContactItem from './ContactItem';
import SearchBox from './SearchBox';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const contactList = useSelector(state => state.contactList);

  return (
    <div>
      <SearchBox />
      <h2 className="line">Contact List</h2>
      <ul>
        {contactList.map((item, index) => (
          <ContactItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default ContactList;


