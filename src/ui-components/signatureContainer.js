import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";

const SignatureContainer = () => {
  const Styles = styled(Container)`
    color: white;
    border-left: 1px solid white;
    margin-top: 40px;
    font-family: Montserrat;
  `;

  return (
    <Styles>
      <h2>Krishna Bharathula</h2>
      <p>
        email : krishnaprasad.bharathula@web.de <br />
        Mobile : +49-15905872069
      </p>
    </Styles>
  );
};

export default SignatureContainer;
