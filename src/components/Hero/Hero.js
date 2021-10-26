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
          Hi, <br/> I'm Jong-Wen Chang <br/>
          A Software Devloper.
        </SectionTitle>
        <SectionText>
          Currently a master student of National Tsing Hua University, Institute of Information Systems Applications, <a href="https://iasl.iis.sinica.edu.tw/index.php"  style={{color:'rgba(255, 255, 255, 0.5)', textDecoration:'underline'}}>Intelligent Agent Systems Lab</a>.
          <br/>My advisor is <a href="https://scholar.google.com/citations?user=NqkY4tIAAAAJ&hl=zh-TW" style={{color:'rgba(255, 255, 255, 0.5)', textDecoration:'underline'}}>許聞廉 Wen-Lian Hsu</a>
        </SectionText>
        <Button onClick={()=> window.location = "https://google.com"}>
          Learn More
        </Button>
      </LeftSection>
    </Section>
  </div>
);

export default Hero;