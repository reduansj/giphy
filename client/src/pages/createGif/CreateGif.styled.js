import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  padding-top: 80px;
  z-index: 0;
  overflow: hidden;
  background: #9254ff;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #0d0d0d, yellow);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #0d0d0d, yellow);
`;

export const Text = styled.span`
  text-align: center;
  margin-top: 24px;
  color: #fff;
  font-size: 14px;
`;
