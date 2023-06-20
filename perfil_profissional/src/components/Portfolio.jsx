import React from "react";
import { DivPrincipal } from "../styles/habilitiesStyle";
import backgroundSpotify from '../../imagens/backgroundCardSpotify.png'
import backgroundPokedex from '../../imagens/backgroundCardPokedex.png'
import {
  Card,
  DivPortfolio,
  ImgCard,
  TitleCard,
  Description,
  DivFrameworks,
  Frameworks,
  DivCards,
} from "../styles/PortfolioStyle";

function Portfolio() {
  return (
   
        <>
        <p
          style={{
            width:'100%',
            fontSize: "40px",
            textAlign: "center",
            fontWeight: " bold ",
            color: "white",
          }}
        >
          Portfólio
        </p>
       
          <DivCards>

        
          <Card>
            <a
              style={{ textDecoration: "none", border: "none" }}
              href="https://naider24.github.io/pokedex/"
              target="_blank"
            >
              <ImgCard id="imgCard" style={{backgroundImage:`url(${backgroundPokedex})`}}></ImgCard>
              <TitleCard id="titleCard">Pokedex</TitleCard>
              <Description id="des">
              A pokedex mostra de forma fácil e rápida informações de um pokemon através da inserção de um nome ou um número
              </Description>
              <DivFrameworks>
                <Frameworks >JavaScript</Frameworks>
                <Frameworks>Html</Frameworks>
                <Frameworks>Css</Frameworks>
              </DivFrameworks>
            </a>
          </Card>

          <Card>
            <a
              style={{ textDecoration: "none", border: "none" }}
              href="https://naider24.github.io/Spotify_Home/"
              target="_blank"
            >
              <ImgCard id="imgCard" style={{backgroundImage:`url(${backgroundSpotify})`}}></ImgCard>
              <TitleCard id="titleCard" >Spotify Home</TitleCard>
              <Description id="des">Home Spotify responsiva,
              escolha uma musica e a coloque para tocar
              </Description>
              <DivFrameworks>
                <Frameworks >React</Frameworks>
                <Frameworks>Html</Frameworks>
                <Frameworks>Css</Frameworks>
              </DivFrameworks>
            </a>
          </Card>
          </DivCards>
     
        </>
        
   
  );
}

export default Portfolio;
