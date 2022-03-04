import React from "react";

import * as S from "./styles";

const Button = ({children, onClickHandler}) => {
  return <S.Button onClick={onClickHandler}>{children}</S.Button>;
};

export default Button;
