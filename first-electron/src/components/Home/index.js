import React, { useState } from "react";

// Styles
import { Container, Title, Wrapper1, Wrapper2, Wrapper3 } from "./styles";

// Components
import Square from "../Square";

const Home = () => {
  const [player, setPlayer] = useState("x");

  return (
    <Container>
      <Title>{player} Turn</Title>
      <Wrapper1>
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
      </Wrapper1>
      <Wrapper2>
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
      </Wrapper2>
      <Wrapper3>
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
        <Square player={player} setPlayer={setPlayer} />
      </Wrapper3>
    </Container>
  );
};

export default Home;
