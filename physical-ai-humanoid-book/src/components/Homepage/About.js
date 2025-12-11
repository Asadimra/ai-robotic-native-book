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
              <h2>Our Mission</h2>
              <p>
                The world of robotics is evolving at an incredible pace, but learning the necessary skills can be challenging. 
                Our mission is to democratize robotics education by providing a free, open, and comprehensive guide to the core principles of Physical AI and humanoid systems. 
                This textbook bridges the gap between theory and hands-on application, empowering the next generation of roboticists to build the intelligent systems of the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
