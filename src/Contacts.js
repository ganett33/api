// Contacts.js
import React from 'react';


const Contacts = ({contacts}) => {
    return(
    <div>
        <center><h1>Contact List</h1></center>
    {
    contacts.map(

        (contact) => (
        <div className="card">
        <div className="card-body">
        <h2 className="card-title">{contact.name}</h2>
        <h3 className="card-subtitle">{contact.email}</h3>
        <p className="card-text">{contact.company.catchPhrase}</p>
        </div>
        </div>
        )
    ) // end contacts.map
    }
    </div>
    )
};

export default Contacts