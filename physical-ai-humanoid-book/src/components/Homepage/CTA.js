import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={clsx('hero hero--primary', styles.ctaBanner)}>
      <div className="container">
        <h2 className="hero__title">Ready to dive into Physical AI?</h2>
        <p className="hero__subtitle">
          Start your learning journey today and contribute to the future of robotics.
        </p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/category/unit-1-introduction-to-physical-ai">
            Explore the Textbook
          </Link>
        </div>
      </div>
    </section>
  );
}
