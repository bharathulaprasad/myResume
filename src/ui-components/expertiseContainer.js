import React from "react";
import styled from "styled-components";
import { Row, Col, ButtonToolbar, Button } from "react-bootstrap";

import { GitHubQuery } from "./../queries/queries";

const ExpertiseContainer = (props) => {
  const [repos, setRepos] = React.useState([]);

  React.useEffect(() => {
    GitHubQuery().then((data) => {
      console.log(data.slice(3));
      setRepos(data.slice(0, 4));
    });
  }, []);

  const ColStyles = styled(Col)`
    margin-top: 20px;
    padding: 0 !important;

    .displayRepos {
      margin-left: 4%;
      max-width: 90%;
    }

    a {
      text-decoration: none;
    }

    a:hover {
      cursor: pointer;
      text-decoration: none;
    }

    @media (max-width: 1206px) {
      .displayRepos {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
      }
    }

    @media (max-width: 995px) {
      .displayRepos {
        display: flex;
        align-items: stretch;
        justify-content: space-between;
      }
    }
  `;

  const GitHubHead = styled.h1`
    display: block;
    font-size: 60px;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    color: white;
    background: rgb(69, 72, 92);
    background-image: url("https://avatars3.githubusercontent.com/u/24426837?v=4");
    box-shadow: inset 0 0 0 2000px rgba(69, 72, 92, 0.9);
    text-align: right;

    &:hover {
      background: rgb(69, 72, 92);
      box-shadow: 0 0 0 2000px rgba(69, 72, 92, 0.9);
    }

    &::after {
      content: "ISE";
      background: white;
      padding-left: 0px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 10px;
      color: rgb(69, 72, 92);
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1198px) {
      font-size: 47px;
      &::after {
      }
    }

    @media (max-width: 993px) {
      font-size: 35px;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  `;

  const ColStyles1 = styled(Col)`
    margin-left: 5%;
    margin-top: 20px;
  `;

  const StyledButton = styled(Button)`
    margin: 2%;
  `;

  return (
    <React.Fragment>
      <Row>
        <ColStyles md={3}>
          <a href="https://github.com/bharathulaprasad">
            {" "}
            <GitHubHead>EXPERT</GitHubHead>
          </a>
        </ColStyles>
        <ColStyles1>
          <ButtonToolbar>
            <StyledButton variant="outline-primary">C</StyledButton>
            <StyledButton variant="outline-secondary">CSS3</StyledButton>
            <StyledButton variant="outline-dark">Git</StyledButton>
            <StyledButton variant="outline-success">HTML5</StyledButton>
            <StyledButton variant="outline-primary">Hadoop</StyledButton>
            <StyledButton variant="outline-success">Linux</StyledButton>
            <StyledButton variant="outline-warning">GraphQL</StyledButton>
            <StyledButton variant="outline-danger">Apollo</StyledButton>
            <StyledButton variant="outline-info">Javascript</StyledButton>
            <StyledButton variant="outline-dark">MongoDB</StyledButton>
            <StyledButton variant="outline-success">TensorFlow2</StyledButton>
            <StyledButton variant="outline-warning">Keras</StyledButton>
            <StyledButton variant="outline-danger">
              React-Bootstrap
            </StyledButton>
            <StyledButton variant="outline-primary">ReactJS</StyledButton>
            <StyledButton variant="outline-secondary">Java</StyledButton>
            <StyledButton variant="outline-info">GraphQL</StyledButton>
            <StyledButton variant="outline-dark">
              Rest API Endpoints
            </StyledButton>
            <StyledButton variant="outline-dark">Automation</StyledButton>
            <StyledButton variant="outline-success">NLP</StyledButton>
            <StyledButton variant="outline-success">
              Machine Learning
            </StyledButton>
            <StyledButton variant="outline-warning">Deep Learning</StyledButton>
            <StyledButton variant="outline-dark">
              Software Architecture
            </StyledButton>
          </ButtonToolbar>
        </ColStyles1>
      </Row>
    </React.Fragment>
  );
};

export default ExpertiseContainer;
