import React from "react";
import styled from "styled-components";
import { Row, Col, Card } from "react-bootstrap";

const ProjectList = [
  {
    title:
      "PLMNextGen+ at B/S/H Oct 2011-Nov 2016, and again Jan 2020- Till Date",
    description: "PLM NextGen+ and CI CD Tools",
    technology:
      "Teamcenter, Ansible, Nagios, Atlassian Suite with Bamboo, Git, Python, JFrog Artifactory, Active workspace development.",
    role: "Software archhitecture and development.",
  },
  {
    title: "Siemens IEC, Nürnberg Nov 2016-Dec 2019",
    description:
      "Part of the team responsible for implementation, solution design and future upgrade support",
    technology:
      "ReactJS, NodeJS, Teamcenter, Html5,CSS3, JS ,Activeworkspace,Python",
    role: "I have developed whole architecture,requirements gathering & coding for this particular project. Also give demo to client what we have done so for on regular intervals. In addition also done testing for all developed features and bug fixing.",
  },
  {
    title: "Trillium Project DTNA Mar 2011 - Oct 2011",
    description:
      "PLM Project using TC PMM (Product master management) and Teamcenter",
    role: "Developing of PLMXML Export Import Architecting data transfer from thirdparty system and supplier integration.",
  },
  {
    title: "Siemens Hi-tech Development July 2009 - Mar 2011",
    description:
      "Involved in Core Product Development of Classification admin and user application development and L10N",
    role: "I have developed L10N features in Classification .",
  },
  {
    title: "GUTS Project for Continental Tires AG July 2006 - July 2009",
    description:
      "Globally unify all tire systems (CBS1, CBS2, and GOMES) into a single PLM system (GUTS) using Teamcenter Engineering 2005 SR1.",
    role: "Sr. Software Engineer .",
  },
  {
    title:
      "DeNIS Project management and Tc Catia Interface configuration project March 2005 - July 2006 Jamshedpur IN - INCAT - A Tata Technlogies company, inside TELCO premises",
    description:
      " Graduate Trainee in Teamcenter Enterprise 3.0 (Metaphase), and Teamcenter Engineering 8.1, was involved in Telco’s legacy PDM System called DeNIS maintainance, and data migration to Metaphase (Teamcenter enterprise)",
    role: "Systems Developer PDM Solutions .",
  },
];

const ProjectContainer = (props) => {
  const ColStyles = styled(Col)`
    margin: 0 !important;
    padding: 0 !important;

    a {
      text-decoration: none;
    }

    a:hover {
      cursor: pointer;
      text-decoration: none;
    }
  `;

  const ProjectColStyles = styled(Col)`
    margin-left: 20px;
    margin-right: 20px;
    margin-bottom: 20px;

    a {
      text-decoration: none;
    }

    a:hover {
      cursor: pointer;
      text-decoration: none;
      color: white;
    }
  `;

  const ProjectHead = styled.h1`
    display: block;
    font-size: 52px;
    padding: 20px;
    padding-top: 40px;
    padding-bottom: 40px;
    color: white;
    background: rgb(69, 72, 92);
    background-image: url("https://avatars3.githubusercontent.com/u/24426837?v=4");
    box-shadow: inset 0 0 0 2000px rgba(69, 72, 92, 0.9);
    text-align: right;

    &::after {
      content: "ECTS";
      background: white;
      padding-left: 0px;
      padding-top: 30px;
      padding-bottom: 30px;
      padding-right: 10px;
      color: rgb(69, 72, 92);
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
    }

    @media (max-width: 1198px) {
      font-size: 41px;
      &::after {
      }
    }

    @media (max-width: 993px) {
      font-size: 24px;
    }

    @media (max-width: 768px) {
      text-align: center;
    }
  `;

  const CardStyle = styled(Card)`
    margin-bottom: 10px;
    background: linear-gradient(
      180deg,
      rgb(69, 72, 92) 100%,
      rgb(90, 92, 100) 0%
    );
    color: white;

    &:hover {
      box-shadow: 3px 3px 5px 6px rgba(0, 0, 0, 0.3);
      background: rgb(69, 72, 92);
      box-shadow: inset 0 0 0 2000px rgba(69, 72, 92, 0.9);
      color: white;
    }
  `;

  return (
    <>
      <Row>
        <ColStyles md={3}>
          <a href="https://github.com/BharathulaPrasad">
            {" "}
            <ProjectHead>PROJ</ProjectHead>
          </a>
        </ColStyles>
        <ProjectColStyles>
          {ProjectList.map((project) => {
            return (
              <CardStyle>
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {project.description}
                  </Card.Subtitle>
                  <Card.Text>{project.role}</Card.Text>
                  <Card.Link href="#">{project.technology}</Card.Link>
                </Card.Body>
              </CardStyle>
            );
          })}
        </ProjectColStyles>
      </Row>
    </>
  );
};

export default ProjectContainer;
