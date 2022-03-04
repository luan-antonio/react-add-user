import React, { Fragment } from "react";
import ReactDOM from "react-dom";

import Card from "../Card";
import Backdrop from "../Backdrop";
import Button from "../Button";

import * as S from "./styles";

console.log(document.getElementById("overlay-root"));

const Modal = ({ onConfirm, title, message }) => {
  console.log(title, message);
  return (
    <Backdrop onClickHandler={onConfirm}>
      <Card padding="0">
        <S.ErrorModal>
          <header>
            <h2>{title}</h2>
          </header>
          <div className="content">
            <p>{message}</p>
          </div>
          <footer>
            <Button onClickHandler={onConfirm}>OK</Button>
          </footer>
        </S.ErrorModal>
      </Card>
    </Backdrop>
  );
};

const ErrorModal = ({ title, message, onConfirm }) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Modal title={title} message={message} onConfirm={onConfirm} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default ErrorModal;
