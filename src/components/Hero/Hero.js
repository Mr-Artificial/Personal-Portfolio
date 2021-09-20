import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
      <LeftSection>
          <SectionTitle main center>
              My name is <br/>
              Maxim Jackson
          </SectionTitle>
          <SectionText>
              Full-Stack Developer and UI/UX Designer
          </SectionText>
          <Button onClick={() => window.location = 'https://www.linkedin.com/in/maxim-jackson-86608b197/'}>Learn More</Button>
      </LeftSection>
  </Section>
);

export default Hero;