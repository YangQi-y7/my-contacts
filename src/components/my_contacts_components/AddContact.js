import ContactForm from "./ContactForm";
import { Container } from "react-bootstrap";

const addFormStyle = {
  position: "sticky",
  top: "30%",
}

const AddContact = ({onAdd}) =>{


    return(
      <Container style={addFormStyle}>
          <ContactForm onAdd={onAdd} />
      </Container>
    )
}

export default AddContact