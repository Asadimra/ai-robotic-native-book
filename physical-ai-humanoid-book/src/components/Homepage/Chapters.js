import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import styles from './Chapters.module.css';

const ChapterList = [
  {
    title: 'Unit 1: Introduction to Physical AI',
    description: 'Explore the foundations of embodied intelligence and robotic hardware.',
    link: '/docs/category/unit-1-introduction-to-physical-ai',
  },
  {
    title: 'Unit 2: Module 1: ROS 2',
    description: 'Master the Robot Operating System (ROS 2) for building complex robot applications.',
    link: '/docs/category/unit-2-module-1-ros-2',
  },
  {
    title: 'Unit 3: Module 2: Gazebo & Unity',
    description: 'Dive into advanced simulation with Gazebo and Unity for training and testing robots.',
    link: '/docs/category/unit-3-module-2-gazebo--unity',
  },
  {
    title: 'Unit 4: Module 3: NVIDIA Isaac',
    description: 'Leverage NVIDIA Isaac for GPU-accelerated robotics development and high-fidelity simulation.',
    link: '/docs/category/unit-4-module-3-nvidia-isaac',
  },
  {
    title: 'Unit 5: Module 4: Vision-Language-Action',
    description: 'Explore Vision-Language-Action (VLA) models for creating general-purpose robots.',
    link: '/docs/category/unit-5-module-4-vision-language-action',
  },
  {
    title: 'Unit 6: Humanoid Robotics',
    description: 'Understand the mechanics, control, and sensing of advanced humanoid robot systems.',
    link: '/docs/category/unit-6-humanoid-robotics',
  },
  {
    title: 'Unit 7: Conversational Robotics',
    description: 'Learn how to integrate language models to build robots that can understand and converse naturally.',
    link: '/docs/category/unit-7-conversational-robotics',
  },
  {
    title: 'Unit 8: Capstone Project',
    description: 'Apply your knowledge to a comprehensive capstone project, from definition to demonstration.',
    link: '/docs/category/unit-8-capstone-project',
  },
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
