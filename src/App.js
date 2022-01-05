import React from "react";
import { GlobalStyle } from "./ui-components/globalStyle";
import BaseContainer from "./ui-components/baseContainer";
import TopHeader from "./ui-components/topHeader";

import GitHubContainer from "./ui-components/gitHubContainer";
import LinkedInComponent from "./ui-components/LinkedInComponent";
import ExpertiseContainer from "./ui-components/expertiseContainer";
import ProjectContainer from "./ui-components/projectContainer";
import ExperienceContainer from "./ui-components/experienceContainer";
import FollowContainer from "./ui-components/followContainer";
import SignatureContainer from "./ui-components/signatureContainer";

function App() {
  return (
    <React.Fragment>
      <GlobalStyle></GlobalStyle>
      <BaseContainer>
        <TopHeader></TopHeader>
        <LinkedInComponent></LinkedInComponent>
        <GitHubContainer id="gitHub"></GitHubContainer>

        <ExpertiseContainer></ExpertiseContainer>
        <ProjectContainer></ProjectContainer>
        <ExperienceContainer></ExperienceContainer>
        <FollowContainer></FollowContainer>
      </BaseContainer>
      <SignatureContainer></SignatureContainer>
    </React.Fragment>
  );
}

export default App;
