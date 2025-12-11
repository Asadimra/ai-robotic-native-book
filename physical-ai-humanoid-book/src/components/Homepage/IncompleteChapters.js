import React from 'react';
import clsx from 'clsx';
import styles from './Chapters.module.css';

const IncompleteChapterList = [
  // Add incomplete chapters here as needed
  // {
  //   title: 'Unit X: Future Topics',
  //   description: 'A brief description of what this unit will cover.',
  // },
];

function IncompleteChapter({title, description}) {
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
          <span className="button button--disabled button--block">Coming Soon</span>
        </div>
      </div>
    </div>
  );
}

export default function IncompleteChapters() {
  if (IncompleteChapterList.length === 0) {
    return null;
  }

  return (
    <section className={styles.chapters}>
      <div className="container">
        <div className="row">
          <div className={clsx('col col--12')}>
            <h2 className="text--center">Work in Progress</h2>
          </div>
        </div>
        <div className="row">
          {IncompleteChapterList.map((props, idx) => (
            <IncompleteChapter key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
