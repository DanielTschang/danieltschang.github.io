import React from 'react';
import { FiUnderline } from 'react-icons/fi';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <div>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, <br/> I'm Daniel Tschang <br/>
          A Software Enginner.
        </SectionTitle>
        <SectionText>
          Software Engineer with a Bachelor's in Statistics and a Master's in Computer Science. Proficient in C++, Golang, and Python. Currently delving deep into the telecommunications and multimedia industry, always seeking opportunities for continuous learning and challenges.

          Feel free to contact!
        </SectionText>
        <Button onClick={()=> window.location = "https://google.com"}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;