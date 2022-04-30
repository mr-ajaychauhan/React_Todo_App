import React, { useEffect, useState } from "react";
import { Button, Card, Container, Stack } from "react-bootstrap";

const getLocalItmes = () => {
  let list = localStorage.hasOwnProperty("lists");

  if (list) {
    return JSON.parse(localStorage.getItem("lists"));
  } else {
    return [];
  }
};

const Todo = () => {


  const [inputData, setInputData] = useState("");
  const [items, setItems] = useState(getLocalItmes());
  const [toggleSubmit, setToggleSubmit] = useState(true);
  const [isEditItem, setIsEditItem] = useState(null);


  const KeyBoardEvent = (event) => {
    if (event.keyCode === 13) {
    //   console.log("Enter pressed");
      addItem();
    }
  };

  const addItem = () => {
    if (!inputData) {
      alert("plzz fill data");
    } else if (inputData && !toggleSubmit) {
      setItems(
        items.map((elem) => {
          if (elem.id === isEditItem) {
            return { ...elem, name: inputData };
          }
          return elem;
        })
      );


      setToggleSubmit(true);

      setInputData("");

      setIsEditItem(null);
    } else {
      const allInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setItems([...items, allInputData]);
      setInputData("");
    }
  };

  // delete the items
  const deleteItem = (index) => {
    const updateditems = items.filter((elem) => {
      return index !== elem.id;
    });

    setItems(updateditems);
  };

  // remove all
  const removeAll = () => {
    setItems([]);
  };

  // add data to localStorage
  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(items));
  }, [items]);
  return (
    <>
      <Container>
        <Card className="text-center col-md-7 mx-auto">
          <Card.Header>
            <h3>TodoList</h3>
          </Card.Header>
          <Stack direction="vertical" gap={3}>
          <Button variant="outline-danger" className="ms-auto" onClick={()=>removeAll ()}>All Clear</Button>
          </Stack>
          <Card.Body>
            <input
              type="text"
              onKeyDown={(e) => KeyBoardEvent(e)}
              placeholder="Add Tasks..."
              value={inputData}
              onChange={(e) => setInputData(e.target.value)}
            />
            </Card.Body>
          
          {items.map((elem) => {
            return (
              <Card.Body key={elem.id}>
                <ul className="list-group">
                  <li className="list-group-item d-flex justify-content-between">
                    {elem.name}
                    <div>
                      <button
                        className="btn btn-sm btn-danger mr-2"
                        onClick={() => deleteItem(elem.id)}
                      >
                        Del
                      </button>
                    </div>
                  </li>
                </ul>
              </Card.Body>
            );
          })}
          <Card.Footer className="text-muted">Made by Ajay Chauhan</Card.Footer>
        </Card>
      </Container>
    </>
  );
};

export default Todo;
