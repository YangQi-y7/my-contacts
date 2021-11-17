import Contact from "./Contact"
import { Row } from "react-bootstrap"


const Contacts = ({contacts, onDelete}) => {

    return(
        <Row md={3} lg={4}  className='border-left justify-content-center'>

            {contacts.map((contact, index)=>(
                <Contact id={index} contact={contact} onDelete={onDelete}/>
            ))}

        </Row>
    )
}

export default Contacts