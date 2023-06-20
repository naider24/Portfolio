import React, { useRef } from "react";
import {
  ListIcon,
  MobileOptions,
  Nav,
  Option,
  OptionMobile,
} from "../styles/navbarStyle";
import { useEffect, useState } from "react";
import {
  DivToggles,
  MyDetails,
  ToggleHabilities,
  TogglePortfolio,
} from "../styles/paginaPrincipal";
import AboutMe from "./AboutMe";
import HabilitieAndSocialMedia from "./HabilitiesAndSocialMedia";
import Portfolio from "./Portfolio";
import { DivPrincipal, Habilities } from "../styles/habilitiesStyle";
import { DivPortfolio } from "../styles/PortfolioStyle";

function PagePrincipal() {
  useEffect(() => {}, []);

  const [habilities, setHabilities] = useState(true);
  const [portfolio, setPorfolio] = useState(false);
  const [OptionsMobile, setOptionsMobile] = useState(false);
  const aboutMeRef = useRef(null);
  const habilidadesRef = useRef();
  const [alternate, setAlternate] = useState(1);
  function viewOptions(value) {
    setOptionsMobile((value) => !value);
  }

  function scrollToAboutMe() {
    aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
    setOptionsMobile(false);
  }

  function viewHabilites() {
    setAlternate(1);
    setHabilities(true);
    setPorfolio(false);
  }
  function viewPortfolio() {
    setAlternate(2);
    setHabilities(false);
    setPorfolio(true);
  }

  function scrollToHabilidades() {
    habilidadesRef.current.scrollIntoView({ behavior: "smooth" });
    setOptionsMobile(false);
  }

  console.log(OptionsMobile);
  return (
    <>

      <MyDetails>
        <div style={{ flex: "1" }}>
          <AboutMe ref={aboutMeRef} />
        </div>
        {alternate == 1 ? (
          <div style={{ flex: "2" }}>
            <DivPrincipal>
            <Habilities>
            <DivToggles>
                <ToggleHabilities checked={habilities} onClick={viewHabilites}>
                  Habilidades
                </ToggleHabilities>
                <TogglePortfolio checked={portfolio} onClick={viewPortfolio}>
                  Portfolio
                </TogglePortfolio>
              </DivToggles>
            <HabilitieAndSocialMedia
                ref={habilidadesRef}
              >               
            </HabilitieAndSocialMedia>
            </Habilities>
              
            
     </DivPrincipal>
          </div>
        ) : (
          ""
        )}
        {alternate == 2 ? <div style={{ flex: "2" }}>
          <DivPrincipal>
          <DivPortfolio>
          <DivToggles>
                <ToggleHabilities checked={habilities} onClick={viewHabilites}>
                  Habilidades
                </ToggleHabilities>
                <TogglePortfolio checked={portfolio} onClick={viewPortfolio}>
                  Portfolio
                </TogglePortfolio>
              </DivToggles>
          <Portfolio>          
           </Portfolio>
          </DivPortfolio>
           
          </DivPrincipal>
        </div>

        : ""}
      </MyDetails>
    </>
  );
}

export default PagePrincipal;
