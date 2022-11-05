import styled from "styled-components";

export const PageContainer = styled.main`
  padding: 2rem;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
`;

export const Dashboard = styled.section`
  display: grid;
  min-height: 100vh;
  grid-template-columns: repeat(4, 1fr);
  align-items: center;
  grid-gap: 0.5rem;
  padding: 4rem;
  background-color: #010606;
  margin-top: 80px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
    padding: 1rem 1rem;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 2rem;
  }
`;

export const GifBackground = styled.div`
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-repeat: no-repeat;

  width: 336px;
  height: 336px;
  position: relative;
  display: block;
  transition: all 0.2s ease-in-out;
  font-size: 1.5rem;
  font-weight: bold;
  color: transparent;

  &:hover {
    transform: scale(1.02);
    transition: all 0.2s ease-in-out;
    transform: translateY(-20px);
    box-shadow: rgba(255, 255, 0) 0px 22px 70px 4px;
    color: yellow;
    backdrop-filter: blur(5px);
    cursor: pointer;
  }
`;

export const GifContainer = styled.div`
  position: absolute;
  color: transparent;
  padding: 1rem;
  overflow: hidden;
  width: 336px;
  height: 336px;
  &:hover {
    backdrop-filter: invert(0.7) blur(10px);
    color: yellow;
  }
`;

export const IconContainerRight = styled.div`
  position: absolute;
  bottom: 5%;
  right: 10%;
  z-index: 10;
`;

export const IconContainerLeft = styled.div`
  position: absolute;
  bottom: 5%;
  left: 10%;
  z-index: 10;
`;

export const Loader = styled.div`
  height: 100%;
  display: flex;
  font-size: large;
  font-weight: bold;
  color: white;
`;
