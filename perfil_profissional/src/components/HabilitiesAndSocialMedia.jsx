import React from "react";
import { DivMediasIcons, DivPrincipal, Habilities, Progress100, Progress50, ProgressBar, SocialMedia , Instagram, Linkedin, GitHub, ReactIcon, CssIcon, HtmlIcon, NodeIcon, DivEmailAndCell, EmailIcon, CellIcon, NameFrameWork, JavaScriptIcon} from "../styles/habilitiesStyle";

function HabilitieAndSocialMedia (){
 
    return(<>
    
        
            <p style={{fontSize:'40px',textAlign:'center',  fontWeight:' bold ' , color:'white'}}>Habilidades</p>
            <div style={{display:'flex', padding:'20px',justifyContent:'center', flexDirection:'column', alignItems:'center', paddingBlockEnd:'100px', }}>
                <div style={{ display: 'flex' , width:'90%',textAlign:'start', padding:'20px' ,}}>
                    <ReactIcon></ReactIcon>
                    <NameFrameWork>REACT</NameFrameWork>
                </div>
                <ProgressBar>
                    <Progress50>50%</Progress50>
                </ProgressBar>
                <div style={{ display: 'flex' , width:'90%',padding:'20px' }}>
                    <JavaScriptIcon></JavaScriptIcon>
                    <NameFrameWork>JAVASCRIPT</NameFrameWork>
                    
                </div>
                <ProgressBar>
                    <Progress50>50%</Progress50>
                </ProgressBar>
                <div style={{ display: 'flex' , width:'90%',padding:'20px' }}>
                    <CssIcon></CssIcon>
                    <NameFrameWork>CSS</NameFrameWork>
                </div>
                <ProgressBar>
                    <Progress100>100%</Progress100>
                </ProgressBar>
                <div style={{ display: 'flex' , width:'90%', padding:'20px' }}>
                    <HtmlIcon></HtmlIcon>
                    <NameFrameWork>HTML</NameFrameWork>
                </div>
                <ProgressBar>
                    <Progress100>100%</Progress100>
                </ProgressBar>
                <div style={{ display: 'flex' , width:'90%',padding:'20px' }}>
                    <NodeIcon></NodeIcon>
                    <NameFrameWork>NODE</NameFrameWork>
                </div>
                <ProgressBar>
                    <Progress50>50%</Progress50>
                </ProgressBar>
            </div>
       
        <SocialMedia>
        <p style={{fontSize:'40px',textAlign:'center',  fontWeight:' bold ' , color:'white'}}>Entre em contato</p>
        <DivEmailAndCell>
           <div style={{display:'flex',marginRight:'50px'}}><EmailIcon></EmailIcon><p style={{fontSize:'20px',textAlign:'center',  fontWeight:' bold ' , color:'gray',marginTop:'10px'}}>nicollaswilker@gmail.com</p></div> 
            <div style={{display:'flex',marginRight:'50px'}}><CellIcon></CellIcon><p style={{fontSize:'20px',textAlign:'center',  fontWeight:' bold ' , color:'gray',marginTop:'10px'}}>(61)99152-1046</p></div>
        </DivEmailAndCell>
        <div style={{display:'flex', padding:'20px',justifyContent:'center', flexDirection:'column', alignItems:'center', paddingBlockEnd:'100px', }}>
        <DivMediasIcons>
            <a href="https://www.freecodecamp.org/" target="_blank"><Instagram></Instagram></a>
            <a href="https://www.linkedin.com/in/nicollaswilker/" target="_blank"><Linkedin></Linkedin></a>
            <a href="https://github.com/naider24" target="_blank"><GitHub></GitHub></a>
        </DivMediasIcons>
        </div>   
        </SocialMedia>
     
    </>)

}


export default HabilitieAndSocialMedia