import {Row, Col } from "react-bootstrap";
import { useState } from "react";
import Contacts from "./my_contacts_components/Contacts";
import AddContact from "./my_contacts_components/AddContact";

const leftStyle = {
  minHeight: "100vh",
  backgroundColor: '#DEBA9D',
}
const rightStyle = {
  minHeight: "100vh",
  backgroundColor: '#9E7777',
}



const MyContacts = () =>{

    const [contacts, setContacts] = useState([
        {
          "name": 'Lorem Ipsum',
          "phone": "333444",
          "description": "friend from work",
          "avatar_url": 'https://image.flaticon.com/icons/png/512/949/949549.png'
      },
      {
        "name": "Lorem Ipsum",
          "phone": "777888",
          "description": 'friend from school',
          "avatar_url": 'https://image.flaticon.com/icons/png/512/949/949553.png'
    },
    {
      "name": "Lorem Ipsum",
        "phone": "222111",
        "description": 'friend from family',
        "avatar_url": 'https://image.flaticon.com/icons/png/512/949/949552.png'
  },
  {
    "name": "Lorem Ipsum",
      "phone": "555999",
      "description": 'friend from community',
      "avatar_url": 'https://image.flaticon.com/icons/png/512/949/949553.png'
}]
      
      );


    const deleteContact = (id) =>{
        setContacts( contacts.filter((_, index) => (index !== id)))
    }

    const addContact = (newContact) =>{
        setContacts([...contacts, newContact])
    }
    
    return(
        <Row>
            <Col md={6} style={leftStyle}>
                <AddContact onAdd={addContact}/>
            </Col>
            <Col md={6} style={rightStyle}>
                {contacts.length > 0 ? <Contacts contacts={contacts} onDelete={deleteContact}/> : <h2>No contacts.</h2>}
            </Col>
        </Row>
    )
}

export default MyContacts