// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = (c) => {
    return (
        <div className='card'>
            <img src={c.data.photo} alt={c.data.name}></img>
            <div className='container'>
                <h1>{c.data.name}</h1>
                <h4>{c.data.phone}</h4>
                <h4>{c.data.email}</h4>
            </div>
        </div>
        
    )
}

export default Contact;