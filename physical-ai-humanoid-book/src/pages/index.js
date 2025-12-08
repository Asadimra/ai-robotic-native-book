import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// Import the new homepage components
import Hero from '../components/Homepage/Hero';
import Features from '../components/Homepage/Features';
import About from '../components/Homepage/About';
import Chapters from '../components/Homepage/Chapters';
import CTA from '../components/Homepage/CTA';

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Home`}
      description="An undergraduate-friendly guide to embodied intelligence, humanoid systems, ROS 2, simulation, and modern robotics."
    >
      <Hero />
      <main>
        <Features />
        <About />
        <Chapters />
        <CTA />
      </main>
    </Layout>
  );
}
