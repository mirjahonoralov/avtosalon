import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 40%;
  border: 2px solid #2a85ff;
  padding: 40px;
  border-radius: 5px;

  h5 {
    span {
      color: #2a85ff;
    }
  }
`;

export const Error = styled.div`
  color: red;
  text-align: center;
`;
