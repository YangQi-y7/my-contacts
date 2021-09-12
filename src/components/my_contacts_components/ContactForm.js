import { useState } from "react";
import { Form, Col, Row, Button, Card } from "react-bootstrap"


const ContactForm = ({onAdd}) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [description, setDescription] = useState('');
    const [avatar_url, setAvatar] = useState('');


    const onSubmit = (e) =>{
        e.preventDefault();
        onAdd({name, phone, description, avatar_url});
        setName('');
        setPhone('');
        setDescription('');
        setAvatar('');
    }

    const randomGenerate = () =>{
      const des = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada ornare diam, vel congue justo. Morbi iaculis non lorem in vulputate. Nullam in elementum quam, sed placerat orci. Nam dictum leo ipsum, at molestie lorem molestie eu. Sed varius eros tortor, vel placerat justo consequat at. Etiam mi dolor, iaculis sed tincidunt ac, congue at magna. Maecenas varius mollis est, a posuere metus malesuada sit amet. Suspendisse vitae condimentum nisl, vel feugiat tortor. Duis malesuada sapien vehicula tincidunt viverra. Integer euismod dui lacus, et fermentum quam fringilla sed. Mauris suscipit velit non tellus feugiat hendrerit. Praesent lacinia sapien sit amet tincidunt bibendum. Phasellus felis libero, ullamcorper id placerat vel, mollis ac enim. Vivamus volutpat ornare consequat. Vestibulum volutpat eget odio quis sollicitudin.'

      const random_number = Math.floor(Math.random()*30) + 30
      const random_url = 'https://image.flaticon.com/icons/png/512/949/9495' + String(random_number) + '.png'
      const name = 'Lorem Ipsum'
      const phone = Math.floor(Math.random()*900000) + 100000

      const random_start = Math.floor(Math.random()*(des.length-40))
      const description = des.substr(random_start, 30)
      setName(name)
      setPhone(phone)
      setDescription(description)
      setAvatar(random_url)
    }

    return(
        // className="m-3"
// {/* <Container className='position-fixed top-50 translate-middle-y'> */}
<Row  className="p-3">
<Col md={4}>
  <Form onSubmit={onSubmit} className='border p-4 border-dark bg-light'>
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}> Name </Form.Label>
      <Col sm={9}>
        <Form.Control placeholder="Name" value={name} onChange={(e) => setName(e.target.value)}/>
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}> Phone </Form.Label>
      <Col sm={9}>
        <Form.Control placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)}/>
      </Col>
    </Form.Group>

    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}> Avatar_url </Form.Label>
      <Col sm={9}>
        <Form.Control placeholder="Avatar_url" value={avatar_url} onChange={(e) => setAvatar(e.target.value)}/>
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} className="mb-3">
      <Form.Label column sm={3}> Description </Form.Label>
      <Col sm={9}>
        <Form.Control as="textarea" value={description} onChange={(e) => setDescription(e.target.value)}/>
      </Col>
    </Form.Group>
  
    <Form.Group as={Row} className="mb-3">
      <Col sm={{ span: 6, offset: 0 }}>
        <Button variant='warning' onClick={randomGenerate}>Radom Generate</Button>
      </Col>

      <Col sm={{ span: 6, offset: 0 }}>
        <Button type="submit">Save Contact</Button>
      </Col>

    </Form.Group>

  </Form>
</Col>
  
<Col md={2} className=' p-2 '>
    <Card border='dark'>
        <Card.Header>{name ? name : '*Preview*'}</Card.Header>
        <Card.Body>
            <Card.Img variant='top' src={avatar_url ? avatar_url : 'https://image.flaticon.com/icons/png/512/949/949549.png'}  alt='Avatar'/>
            <Card.Title>{phone ? phone : '*Phone*'}</Card.Title>
            <Card.Subtitle>{description? description : '*Description*'}</Card.Subtitle>
        </Card.Body>
    </Card>
</Col>

</Row>

// </Container>

)

}

export default ContactForm