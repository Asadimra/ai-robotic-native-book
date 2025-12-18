import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContainer}>
          <div className={styles.heroText}>
            <h1 className="hero__title">Physical AI & Humanoid Robotics</h1>
            <p className="hero__subtitle">Your guide to the future of embodied intelligence.</p>
            <div className={styles.buttons}>
              <Link
                className="button button--secondary button--lg"
                to="/docs/category/unit-1-introduction-to-physical-ai">
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
