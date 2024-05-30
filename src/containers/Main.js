import React from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import WorkExperience from "./workExperience/WorkExperience";
import StartupProject from "./StartupProjects/StartupProject";
import Education from "./education/Education";
import ScrollToTopButton from "./topbutton/Top";
import Profile from "./profile/Profile";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.scss";

const Main = () => {
  return (
    <div>
      <StyleProvider value={{ changeTheme: () => {} }}>
        <>
          <Header />
          <Greeting />
          <WorkExperience />
          <StartupProject />
          <Education />
          <Profile />
          <ScrollToTopButton />
        </>
      </StyleProvider>
    </div>
  );
};

export default Main;
