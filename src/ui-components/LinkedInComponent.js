import React from "react";
import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

const LinkedInComponent = () => {
  const LinkedStyle = styled(Col)`
     {
      flex: 1;
      flex-wrap: nowrap;
    }
    float: right;
    align: right;
    text-align: right;
    margin-bottom: 10px;
    font-size: 40px;
    &::before {
      content: "";
      border: 10px solid #007bb5;
    }

    a {
      text-decoration: none;
      color: rgb(69, 72, 92);
    }

    a:hover {
      text-decoration: none;
      color: rgb(69, 72, 92);
    }

    text:nth-child(1) {
      padding-right: 10px;
    }

    text:nth-child(2) {
      padding-left: 10px;
    }

    span {
      padding-right: 10px;
    }

    .fa {
      font-size: 40px;
      text-align: center;
      text-decoration: none;

      background: #007bb5;
      color: white;
      padding: 20px;
    }
  `;

  return (
    <Row>
      <LinkedStyle>
        <a href="https://www.linkedin.com/in/bprasadvk/">
          <text>My</text>
          <span className="fa fa-linkedin"></span>
          <text>Profile</text>
        </a>
      </LinkedStyle>
    </Row>
  );
};

export default LinkedInComponent;
