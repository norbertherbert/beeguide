import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Trackers',
      link: {
        type: 'generated-index',
        title: 'Trackers',
        description: 'Abeeway tracker model documentation.',
      },
      items: ['trackers/combo-compact'],
    },
    {
      type: 'category',
      label: 'Payload Formats',
      link: {
        type: 'generated-index',
        title: 'Payload Formats',
        description: 'Payload reference for uplink and downlink messages.',
      },
      items: ['payload-formats/uplink-messages', 'payload-formats/downlink-messages'],
    },
    {
      type: 'category',
      label: 'Configuration',
      link: {
        type: 'generated-index',
        title: 'Configuration',
        description: 'Tracker behavior and feature configuration guides.',
      },
      items: [
        'configuration/intro',
        'configuration/beehive',
        'configuration/beequeen',
      ],
    },
    {
      type: 'category',
      label: 'Integration',
      link: {
        type: 'generated-index',
        title: 'Integration',
        description: 'Network server integration guides and best practices.',
      },
      items: [
        'integration/intro',
      ],
    },
    {
      type: 'category',
      label: 'Quick Demo',
      link: {
        type: 'generated-index',
        title: 'Quick Demo',
        description: 'Guide to set up quick demos.',
      },
      items: [
        'quick-demo/intro',
      ],
    },
  ],
};

export default sidebars;
