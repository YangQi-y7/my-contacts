import { CloseButton, Card } from "react-bootstrap"

const Contact = ({id, contact, onDelete}) =>{
    return(
        <Card border='dark' className='m-3'>
            <Card.Header>{contact.name}</Card.Header>
            <Card.Body>
                <Card.Img variant='top' src={contact.avatar_url} alt='Avatar'/>
                <Card.Title>{contact.phone}</Card.Title>
                <Card.Subtitle>{contact.description}</Card.Subtitle>
                <CloseButton onClick={() => onDelete(id)}/>
            </Card.Body>
        </Card>
    )
}

export default Contact