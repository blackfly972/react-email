import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';



//process.env.REACT_APP_SERVICE_ID;
//process.env.REACT_APP_TEMPLATE_ID;
//process.env.REACT_APP_USER_ID;


class FormEmail extends React.Component {
    render() {

        const handleOnSubmit = (e) => {
            e.preventDefault();
            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
              .then((result) => {
                console.log(result.text);
                Swal.fire({
                  icon: 'success',
                  title: 'Message Sent Successfully'
                })
              }, (error) => {
                console.log(error.text);
                Swal.fire({
                  icon: 'error',
                  title: 'Ooops, something went wrong',
                  text: error.text,
                })
              });
            e.target.reset()
          };
        return (
            <Form onSubmit={handleOnSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control size="lg" type="email" name="from_name" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Prénom et Nom</Form.Label>
                    <Form.Control size="lg"type="text" name="to_name" placeholder="name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Numéro de ligne</Form.Label>
                    <Form.Control size="lg"type="text" name="to_phoneNumber" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Numéro d'abonné</Form.Label>
                    <Form.Control size="lg"type="text" name="to_accountNumber" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Message</Form.Label>
                    <Form.Control size="lg" as="textarea" name="message" rows={5} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    }
}

export default FormEmail;