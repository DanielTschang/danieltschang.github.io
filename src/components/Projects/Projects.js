import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider/>
    <br/>
    
    <SectionTitle >Projects</SectionTitle>
    <GridContainer>
      {projects.map((project)=>(
        <BlogCard key={project.id}>
          <Img src={project.image}/>
          <TitleContent>
            <HeaderThree title>{project.title}</HeaderThree>
            <Hr/>
          </TitleContent>
          <CardInfo >{project.description}</CardInfo>
          <div>
            <TitleContent></TitleContent>
            <TagList>
              {project.tags.map((tag,i)=>(
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
          <UtilityList>
            <ExternalLinks href={project.visit}>Github</ExternalLinks>
            <ExternalLinks href={project.source}>Demo</ExternalLinks>
          </UtilityList>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;