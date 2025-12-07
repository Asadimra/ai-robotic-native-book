// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  textbookSidebar: [
    {
      type: 'category',
      label: 'Unit 1: Introduction to Physical AI & Humanoid Robotics',
      link: {
        type: 'generated-index',
        title: 'Unit 1 Overview',
        description: 'An introduction to the fundamental concepts of Physical AI and Humanoid Robotics.',
        slug: '/category/unit-1-introduction',
      },
      items: [
        {
          type: 'category',
          label: 'Chapter 1.1: Foundations of Physical AI',
          link: {
            type: 'generated-index',
            title: 'Chapter 1.1 Overview',
            description: 'This chapter covers the basic principles and historical context of Physical AI.',
            slug: '/category/chapter-1-1-foundations',
          },
          items: [
            'unit1/chapter1.1/lesson1.1.1',
            'unit1/chapter1.1/lesson1.1.2',
          ],
        },
        // Add more chapters for Unit 1 here
      ],
    },
    // Add more units here
  ],
};

export default sidebars;
