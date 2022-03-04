import styled from "styled-components";

export const ErrorModal = styled.div`
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
