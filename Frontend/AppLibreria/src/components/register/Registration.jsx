
import { Col, Button, Row, Container, Card, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import './registration.css';
export const Registration = () => {

  const { singup, user } = useAuth();
    const navigate = useNavigate();

    const onSubmitData = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
       
        console.log({
          nombre: data.get("nombre"),
          rut: data.get("rut"),
        });
        const userData = {
          nombre : data.get("nombre"),
          apellido: data.get("apellido"),
          rut: data.get("rut"),
          edad: data.get("edad"),
          correo: data.get("email"),
          password: data.get("password"),
        };
        const userResponse = singup(userData)
        console.log(userResponse)
        //navigate('/')
    }

  return (
    <div>
      <Container className='container-register'>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={8} lg={6} xs={12}>
            <Card className="px-4">
              <Card.Body>
                <div className="mb-3 mt-md-4">
                  <h2 className="fw-bold mb-2 text-center text-uppercase ">
                    Registrate
                  </h2>
                  <div className="mb-3">
                    <Form onSubmit = {(e) => {onSubmitData(e)}}>
                    <Form.Group className="mb-3" controlId="Rut">
                        <Form.Label className="text-center">RUT</Form.Label>
                        <Form.Control type="text"  name="rut" placeholder="Ingrese RUT" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Nombre">
                        <Form.Label className="text-center">Nombre</Form.Label>
                        <Form.Control type="text"  name="nombre" placeholder="Ingrese Nombre" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Apellido">
                        <Form.Label className="text-center">Apellido</Form.Label>
                        <Form.Control type="text" name="apellido" placeholder="Ingrese Apellido" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Edad">
                        <Form.Label className="text-center">Edad</Form.Label>
                        <Form.Control type="text" name="edad" placeholder="Ingrese Edad" />
                      </Form.Group>
                      <Form.Group className="mb-3" controlId="Email">
                        <Form.Label className="text-center">
                          Mail 
                        </Form.Label>
                        <Form.Control type="email" name="email" placeholder="Ingrese Mail" />
                      </Form.Group>

                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicPassword"
                      >
                        <Form.Label>Confirme Contraseña</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                      </Form.Group>
                      <Form.Group
                        className="mb-3"
                        controlId="formBasicCheckbox"
                      ></Form.Group>
                      <div className="d-grid">
                        <Button variant="primary" type="submit">
                          Crear Cuenta
                        </Button>
                      </div>
                    </Form>
                    <div className="mt-3">
                      <p className="mb-0  text-center">
                        Ya tienes una cuenta??{' '}
                        <a href="/login" className="text-primary fw-bold">
                          Login
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
