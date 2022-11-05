import styled from "styled-components";

export const Wrap = styled.div`
  height: 100%;
  display: flex;
  background: black;
  flex-direction: column;
  justify-content: center;
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`;

export const Content = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px;
  @media screen and (max-width: 480px) {
    padding: 10px;
  }
`;
export const Title = styled.h4`
  text-align: center;
  color: #fff;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Btn = styled.button`
  background-color: ${({ danger }) => (danger ? "red" : "#9254ff")};
  padding: 16px;
  min-width: 100px;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;
`;
