import React from "react";
import { Button, Card, Container } from "react-bootstrap";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function App(props) {
  const KeyBoardEvent = (event) =>{
      event.persist();
      if (event.key === "Enter") {
        console.log('Enter ho gya ');
      }
  }
  return (
    <>
      <Container>
        <Card className="text-center">
          <Card.Header><h3>TodoList</h3></Card.Header>
          <Card.Body>
            <input type="text" className="mb-3" onKeyPress={KeyBoardEvent} />
            {/* <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text> */}
          </Card.Body>
          <Card.Footer className="text-muted">Made by Ajay Chauhan</Card.Footer>
        </Card>
      </Container>
    </>
  );
}

export default App;
