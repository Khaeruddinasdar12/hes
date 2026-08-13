import React from 'react';
import About from '../components/sections/About';
import HistoryVision from '../components/sections/HistoryVision';
import OrganizationStructure from '../components/sections/OrganizationStructure';
import Facilities from '../components/sections/Facilities';
import Testimonials from '../components/sections/Testimonials';

const AboutPage = () => {
  return (
    <>
      <About />
      <HistoryVision />
      <OrganizationStructure />
      <Facilities />
      <Testimonials />
    </>
  );
};

export default AboutPage;
