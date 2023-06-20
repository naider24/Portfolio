import React from "react";
import {
  Presentation,
  DivPrincipal,
  Resume,
  MyPhoto,
  DivPerfil,
  MyName,
  DivAboutMe,
  
  BackgroundBlue,
} from "../styles/aboutMeStyle";



function AboutMe() {
  return (
    <DivPrincipal >
      <Presentation>Olá eu sou o Nicollas</Presentation>
      <DivAboutMe>
        <div
          style={{ padding: "20px", display: "flex", justifyContent: "center" }}
        >
          <Resume>
            <DivPerfil>
              <MyPhoto></MyPhoto>
            </DivPerfil>
            <MyName>Nicollas Wilker</MyName>
            <div
              style={{
                width: "35%",
                height: "2px",
                backgroundColor: "#191919",
                marginLeft: "30px",
                marginBlockEnd: "20px",
              }}
            ></div>
            Sou desenvolvedor focado no front-end , gosto de mexer com o design
            de paginas, mas tambem consigo lidar bem com o backend
          </Resume>
        </div>
        <BackgroundBlue></BackgroundBlue>
      </DivAboutMe>
    </DivPrincipal>
  );
}

export default AboutMe;
