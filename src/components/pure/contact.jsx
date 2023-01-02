import React from 'react';
import PropTypes from 'prop-types';
import {Contact} from '../../models/contact.class'


const ContactComponent = ({ contact }) => {

    return (
        <div>
            <h2>Nombre: { contact.name } { contact.surname }</h2>
            <h2>Email: { contact.email }</h2>
            <h2>Conectado: { contact.status ? 'Online' : 'Offlline'}</h2>
        </div>
    );
};


ContactComponent.propTypes = {
    contact : PropTypes.instanceOf(Contact)
};


export default ContactComponent;
