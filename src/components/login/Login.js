import {useState, useRef} from 'react';
import { Container, Row, Col, Form, Button} from "react-bootstrap";
import './login.css'


function Login(){
    const [validated, setValidated] = useState(false);
    const nameRef = useRef(null);

    const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false)  {
        event.preventDefault();
        event.stopPropagation();
      }else{
        localStorage.setItem('name', nameRef.current.value);
      }
      setValidated(true);

    };

    

    return <Container >
        <Row className="justify-content-md-center text-center"> 
            <Col md={8} className="login">
                <h1 className="mt-5">Вітаю!</h1>
                <Form noValidate validated={validated} onSubmit={handleSubmit} action="/" className="mt-5">
                    <Form.Group controlId="validationCustom01">
                        <Form.Label>Введіть ваше ім'я</Form.Label>
                        <Form.Control
                            required
                            type="text"
                            minLength="5"
                            pattern="[^0-9]{5,}"
                            placeholder="Наприклад, Дедпул" 
                            className="mb-5" 
                            ref={nameRef} 
                        />
                        <Form.Control.Feedback>Чудове ім'я!</Form.Control.Feedback>
                        <Form.Control.Feedback type="invalid">
                            Ім'я не має містити цифри, та має бути довшим за 4 символи.
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Button type="success" variant="outline-dark">Увійти</Button>
                </Form>
            </Col>
        </Row>
    </Container>
}

export default Login;