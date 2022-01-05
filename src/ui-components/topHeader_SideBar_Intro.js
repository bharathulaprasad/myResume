import React from "react";
import styled from "styled-components";

const IntroSection = () => {
  const Styles = styled.div`
    margin-top: 10px;
    margin-left: 7%;
    max-width: 100%;
    justify-content: space-around;

    .name-heading {
      font-family: fantasy;
      font-size: 73px;
      color: rgb(69, 72, 92);
    }

    @media (max-width: 1202px) {
      margin-left: 15%;
    }

    @media (max-width: 999px) {
      margin-left: 25%;
    }

    @media screen and (min-width: 999px) {
      display: flex;
      align-items: stretch;
      justify-content: space-around;
    }

    @media (max-width: 420px) {
      margin-left: 15%;
    }

    @media (max-width: 420px) {
      margin-left: 5%;

      .name-heading {
        font-size: 53px;
      }
    }
  `;

  const ColStyles = styled.div`
    flex-basis: 40%;
    padding: 20px;
    box-sizing: border-box;

    p {
      border: 1px solid rgb(69, 72, 92);
      padding: 5px;
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
    }
  `;

  return (
    <Styles>
      <ColStyles className="intro-heading">
        <h1 className="name-heading">
          Krishna <br />
          Bharathula
        </h1>
      </ColStyles>
      <ColStyles className="intro-section">
        <p>
          I,<strong> Krishna Bharathula,</strong> am the Software Architect in
          Piterion GmbH, having profound knowledge of 'CI/CD Tools', 'PLM
          Enterprise-Applications Architecture Interface' using modern cloud
          architecture with PLM Teamcenter. Beside this I have keen interest in
          learning
          <strong> Open-Source</strong> and <strong>System-Design</strong>.
        </p>
      </ColStyles>
    </Styles>
  );
};

export default IntroSection;
