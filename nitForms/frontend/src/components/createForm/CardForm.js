import React, { Component, Fragment } from "react";
import TextareaAutosize from "react-textarea-autosize";
// import "./style.css";
import { Card } from "react-bootstrap";

const CardForm = ({ question }) => (
  <Fragment>
    <div className="card">
      <Card.Header
        style={{
          backgroundColor: "lightblue",
          borderRadius: ".75rem .75rem 0 0 ",
        }}
      >
        QUESTION
      </Card.Header>
      <Card.Body>
        <Card.Title>{question}</Card.Title>
        <Card.Text>
          <TextareaAutosize placeholder="Write your answer here..."></TextareaAutosize>
        </Card.Text>
      </Card.Body>
    </div>
  </Fragment>
);

export default CardForm;
