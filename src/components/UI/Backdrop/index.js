import React from "react";

import * as S from "./styles";

const Backdrop = ({ children, onClickHandler }) => {
  return <S.Backdrop onClick={onClickHandler}>{children}</S.Backdrop>;
};

export default Backdrop;
