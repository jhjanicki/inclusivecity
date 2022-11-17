import { Link } from "react-router-dom";
import { useContext } from "react";
import { URLStateContext } from "../URLStateContext";
import { Navbar } from "./Navbar";
import { NavItem } from "./NavItem";

export const Layout = ({ children }) => {
  const { language, setLanguage } = useContext(URLStateContext);
  return (
    <div className="App">
      <div className="bannerSection">
        <div className="banner">
          <Navbar>
            <NavItem
              language={language}
              withQuery={true}
              url="/"
              pageName="home"
              subpageName=""
            ></NavItem>
            <NavItem
              language={language}
              withQuery={true}
              url="/organizations"
              pageName="organizations"
              subpageName=""
            ></NavItem>
            <NavItem
              language={language}
              withQuery={true}
              url="/studentsAgainstRacism"
              pageName="students"
              subpageName=""
            ></NavItem>
            <NavItem
              language={language}
              withQuery={true}
              url="/policy"
              pageName="policy"
              subpageName="governmentAndPolicy"
            >
            </NavItem>
            <NavItem
              language={language}
              withQuery={true}
              url="/history"
              pageName="history"
              subpageName="historyOfRotterdam"
            ></NavItem>
            {/* <NavItem
              language={language}
              withQuery={true}
              url="/experience"
              pageName="experience"
              subpageName="experienceOfRotterdammers"
            ></NavItem> */}
            <NavItem
              language={language}
              withQuery={true}
              url="/literature"
              pageName="literature"
              subpageName="literatureList"
            ></NavItem>
          </Navbar>
        </div>
      </div>
      {children}
      <div className="footer">
        <p>2022</p>
      </div>
    </div>
  );
};
