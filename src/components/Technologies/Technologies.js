import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
      <SectionDivider />
      <br />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
          I have worked with a range of languages and technologies in the web development world,
          focusing mainly on maintenance and full-stack development.
      </SectionText>
      <List>
          <ListItem>
              <DiReact size="3rem"/>
              <ListContainer>
                  <ListTitle>Front-End</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      React.js
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiFirebase size="3rem"/>
              <ListContainer>
                  <ListTitle>Back-End</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      Node and Databases
                  </ListParagraph>
              </ListContainer>
          </ListItem>
          <ListItem>
              <DiZend size="3rem"/>
              <ListContainer>
                  <ListTitle>UI/UX</ListTitle>
                  <ListParagraph>
                      Experience with <br/>
                      tools like Figma
                  </ListParagraph>
              </ListContainer>
          </ListItem>
      </List>
  </Section>
);

export default Technologies;
