import React from "react";

import Card from "../Card";
import Backdrop from "../Backdrop";
import Button from "../Button";

import * as S from "./styles";

const ErrorModal = ({ title, message, onConfirm }) => {
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

export default ErrorModal;
