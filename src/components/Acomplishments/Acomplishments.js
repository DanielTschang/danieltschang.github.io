import React from 'react';

import { Section, SectionDivider, SectionTitle,SectionText } from '../../styles/GlobalComponents';
import { Box, BoxAward, Boxes, BoxTitle} from './AcomplishmentsStyles';

import { AcomplishmentsData } from '../../constants/constants';
import { FiAward } from "react-icons/fi";

const Acomplishments = () => (
  <Section>
    <SectionTitle>
      Acomplishments
    </SectionTitle>
    <SectionText>
    </SectionText>
    <Boxes>
      {AcomplishmentsData.map((card,index)=>(
        <Box key={index}>
          
          <BoxTitle><FiAward size='2rem' style={{marginRight:'1rem'}}/>{card.organization}</BoxTitle>
          <BoxAward>{card.award}</BoxAward>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;
