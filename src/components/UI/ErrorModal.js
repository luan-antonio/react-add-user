import React from "react";
import styled from "styled-components";

import Card from "./Card.js";
import Backdrop from "./Backdrop.js";
import Button from "./Button.js";

const ErrorModalStyle = styled.div`
  width: 100%;
  z-index: 100;
  overflow: hidden;

  & header {
    background: #4f005f;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    padding: 1rem;
  }

  & header h2 {
    margin: 0;
    color: white;
  }

  & .content {
    padding: 1rem;
  }

  & footer {
    padding: 1rem;
    display: flex;
    justify-content: flex-end;
  }
`;

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <Backdrop onClick={onConfirm}>
      <Card padding="0">
        <ErrorModalStyle>
          <header>
            <h2>{title}</h2>
          </header>
          <div className="content">
            <p>{message}</p>
          </div>
          <footer>
            <Button onClick={onConfirm}>OK</Button>
          </footer>
        </ErrorModalStyle>
      </Card>
    </Backdrop>
  );
};

export default ErrorModal;
