import React from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import HistoryVision from '../components/sections/HistoryVision';
import News from '../components/sections/News';
import Announcements from '../components/sections/Announcements';
import Testimonials from '../components/sections/Testimonials';

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <HistoryVision />
      <Announcements limit={3} />
      <News limit={6} />
      <Testimonials />
      
    </>
  );
};

export default HomePage;
