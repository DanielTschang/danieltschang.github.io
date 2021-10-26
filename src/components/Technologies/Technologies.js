import React from 'react';
import { AiFillRobot} from 'react-icons/ai';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';


const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider/>
    <br/>
      <SectionTitle>
        Technologies
      </SectionTitle>
      <SectionText>
        I've worked with a range a Technologies in the web dev .<br/>
        From Back-end to Front-end and Machine Learning.
      </SectionText>
      <List>
        <ListItem>
          <DiReact size="4rem" style={{marginLeft:'-5px'}} />
          <ListContainer>
            <ListTitle>Front-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <DiFirebase size="4rem" style={{marginLeft:'-10px'}}/>
          <ListContainer>
            <ListTitle>Back-End</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Node.js, Python, Golang and Databases
            </ListParagraph>
          </ListContainer>
        </ListItem>
        <ListItem>
          <AiFillRobot size="3rem" style={{marginLeft:'-5px'}}/>
          <ListContainer>
            <ListTitle>Machine Learning</ListTitle>
            <ListParagraph>
              Experience with <br/>
              Natural Language Processing,<br/>
              Deep Learning, <br/>
              Statistic-Based Machine Learning<br/>

            </ListParagraph>
          </ListContainer>
        </ListItem>
      </List>
  </Section>

);

export default Technologies;
