import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './Chapters.module.css';

const ChapterList = [
  {
    title: 'Unit 1: Introduction to Physical AI',
    description: 'Explore the foundations of embodied intelligence and robotic hardware.',
    link: '/docs/category/unit-1-introduction',
  },
  {
    title: 'Unit 2: Module 1: ROS 2',
    description: 'Dive into the mechanics and control of humanoid robots.',
    link: '/docs/category/unit-2-module-1-ros-2',
  },
  {
    title: 'Unit 3: Module 2: Gazebo & Unity',
    description: 'Master the Robot Operating System for building complex applications.',
    link: '/docs/category/unit-3-module-2-gazebo-unity',
  },
  // Add more chapters as needed
];

function Chapter({title, description, link}) {
  return (
    <div className={clsx('col col--4', styles.chapterItem)}>
      <div className="card">
        <div className="card__header">
          <h3>{title}</h3>
        </div>
        <div className="card__body">
          <p>{description}</p>
        </div>
        <div className="card__footer">
          <Link className="button button--primary button--block" to={link}>
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function Chapters() {
  return (
    <section className={styles.chapters}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <h2 className="text--center">Chapters & Units</h2>
          </div>
        </div>
        <div className="row">
          {ChapterList.map((props, idx) => (
            <Chapter key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
