import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import withRouter from "../hooks/withRouter"
import { MainPage } from "../pages/MainPage/MainPage";
import { UploadPage } from "../pages/UploadPage/UploadPage";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ProblemStatement from "../components/MainPageContent/ProblemStatement/ProblemStatement";
import SolutionConcept from "../components/MainPageContent/SolutionConcept/SolutionConcept";
import ImplementationAndCustomization from "../components/MainPageContent/ImplementationAndCustomization/ImplementationAndCustomization";
//import Login from "../pages/LoginPage/login";
//import SignUp from "../pages/SignUpPage/signup"; // Updated import path


const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <TransitionGroup>
      <CSSTransition
        key={location.key}
        timeout={{ enter: 400, exit: 400 }}
        classNames="page"
        unmountOnExit
      >
        <Routes location={location}>
          <Route path="/" element={<MainPage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route path="/ProblemStatement" element={<ProblemStatement />} />
          <Route path="/SolutionConcept" element={<SolutionConcept />} />
          <Route path="/ImplementationAndCustomization" element={<ImplementationAndCustomization />} />
          <Route path="*" element={<MainPage />} />
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
};

function AppRoutes() {
  return (
    <div className="s_c">
      <AnimatedRoutes />
      <Socialicons />
    </div>
  );
}

export default AppRoutes;
