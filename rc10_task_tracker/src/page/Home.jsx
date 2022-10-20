// import React, { useState } from "react";
import AddTask from "../components/addTask/AddTask";
import TaskList from "../components/taskList/TaskList";
import Button from "react-bootstrap/Button";
import { useState, useEffect } from "react";
import axios from "axios";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [text, setText] = useState("Show Task Bar");
  const url = "https://6351827ddfe45bbd55c22952.mockapi.io/tasktrack/tasks";

  const toggle = () => {
    setIsOpen(!isOpen);
    const buttonText = isOpen ? "Show Task Bar" : "Hide Task Bar";
    setText(buttonText);
  };

  //CRUD - READ
  const getTask = async () => {
    const { data } = await axios(url);
    setTask(data);
  };

  useEffect(() => {
    getTask();
  }, []);

  return (
    <div>
      <Button
        onClick={(e) => {
          toggle();
        }}
        variant="danger"
        size="lg"
      >
        {text}
      </Button>
      {isOpen && <AddTask />}
      <AddTask />
      <TaskList />
    </div>
  );
};

export default Home;
