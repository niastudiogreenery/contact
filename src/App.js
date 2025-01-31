import React from 'react';
import ContactForm from './Component/ContactForm';
import ContactList from './Component/ContactList';  // Make sure the name matches exactly
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';

function App() {
  return (
    <div>
      <header>
        <h1 className="title">_______</h1>
      </header>
      <main>
        <Container>
          <Row>
            <Col md={6}>
              <h2>Contact</h2>
              <ContactForm />
            </Col>

            <Col md={6}>
              <h2 className="line"> </h2>
              <ContactList />
            </Col>
          </Row>
        </Container>
      </main>
    </div>
  );
}

export default App;
