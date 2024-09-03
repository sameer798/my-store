import React,{useRef} from 'react';
import { Form, Button, Container, Card } from 'react-bootstrap';

const ContactUs = () => {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const phoneRef = useRef('')
    const issueRef = useRef('')

    async function addUserContactHandler(e){
      
        e.preventDefault();
        const contactData = {
            name:nameRef.current.value,
            email: emailRef.current.value,
            phone: phoneRef.current.value,
            issue: issueRef.current.value,
        }
        
        try {
            const response = await fetch('https://user-contact-cf343-default-rtdb.firebaseio.com/contacts.json', {
                method : 'POST',
                headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(contactData),
            });

            if (!response.ok) {
                throw new Error('Something went wrong!');
              }
        
              alert('Contact information submitted successfully!');
              nameRef.current.value = '';
              emailRef.current.value = '';
              phoneRef.current.value = '';
              issueRef.current.value = '';

        } catch (error) {
            alert('Failed to submit contact information: ' + error.message);
        }
    }


  return (
    <Container className="d-flex justify-content-center mt-5 mb-5">
            <Card className="shadow" style={{ width: '100%', maxWidth: '600px' }}>
                <Card.Body>
                    <Card.Title className="text-center mb-4">Contact Us</Card.Title>
                    <Form onSubmit={addUserContactHandler}>
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter your name" ref={nameRef} />
                        </Form.Group>

                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter your email" ref={emailRef} />
                        </Form.Group>

                        <Form.Group controlId="formPhone">
                            <Form.Label>Phone Number</Form.Label>
                            <Form.Control type="text" placeholder="Enter your phone number" ref={phoneRef} />
                        </Form.Group>

                        <Form.Group controlId="formIssue">
                            <Form.Label>Issue</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Describe your issue" ref={issueRef} />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="mt-3" style={{ width: '100%' }}>
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        </Container>
  );
};

export default ContactUs;
