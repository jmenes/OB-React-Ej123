import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';

const Contacts = () => {

    const defaultContact = new Contact('Javier', 'Menés', 'email@email.com', true)

    return (
        <div>
            <h1>Contacts</h1>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    );
};

export default Contacts;
