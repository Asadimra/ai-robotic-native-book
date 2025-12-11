import React from 'react';
import clsx from 'clsx';
import styles from './Features.module.css';

const FeatureList = [
  {
    title: 'Comprehensive Curriculum',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        From the fundamentals of ROS 2 and robot hardware to cutting-edge Vision-Language-Action (VLA) models, our curriculum covers the full spectrum of modern robotics.
      </>
    ),
  },
  {
    title: 'Advanced Simulation',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Master industry-standard tools like Gazebo and NVIDIA Isaac Sim to test, train, and deploy robots in high-fidelity, photorealistic virtual environments.
      </>
    ),
  },
  {
    title: 'AI-Driven Robotics',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Dive into the future of robotics by learning how to integrate Large Language Models (LLMs) for conversational AI and high-level task planning.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
