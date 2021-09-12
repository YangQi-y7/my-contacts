import Contact from "./Contact"
import { Row } from "react-bootstrap"


const Contacts = ({contacts, onDelete}) => {

    return(
        <Row lg={4} md={3} sm={2} className='border-left'>

            {contacts.map((contact, index)=>(
                <Contact id={index} contact={contact} onDelete={onDelete}/>
            ))}

        </Row>
    )
}

export default Contacts