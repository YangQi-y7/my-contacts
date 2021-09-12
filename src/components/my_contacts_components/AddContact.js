import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";



const AddContact = ({onAdd}) =>{

    return(
      <Container className='position-fixed top-50 translate-middle-y'>
          <ContactForm onAdd={onAdd} />
      </Container>
    )
}

export default AddContact