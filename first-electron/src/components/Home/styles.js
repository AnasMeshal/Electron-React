import styled from "styled-components";
import "../../index.css";

export const Container = styled.div`
  display: flex;
  width: 80%;
  height: 800px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  -ms-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  background-color: white;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.h2`
  font-family: "Itim", cursive;
  font-size: 50px;
  color: purple;
  text-align: center;
  margin: 60px 0 0 0;
`;

export const Wrapper1 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    border: solid 2px black;
    border-radius: 20px;
    margin: 30px;
    padding: 50px;
  }
`;

export const Wrapper2 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    border: solid 2px black;
    border-radius: 20px;
    margin: 30px;
    padding: 50px;
  }
`;

export const Wrapper3 = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  div {
    border: solid 2px black;
    border-radius: 20px;
    margin: 30px;
    padding: 50px;
  }
`;
