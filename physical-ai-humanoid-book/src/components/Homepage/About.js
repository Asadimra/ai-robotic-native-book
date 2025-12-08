import React from 'react';
import clsx from 'clsx';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <div className="text--center">
              <h2>About the Textbook</h2>
              <p>
                This textbook is designed to be a living document, a comprehensive and ever-evolving guide to the fascinating world of physical AI and humanoid robotics. 
                Our goal is to provide a free, accessible, and practical resource for students, hobbyists, and professionals alike. 
                We cover the fundamental concepts, modern tooling, and practical skills you need to start building and programming intelligent robotic systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
