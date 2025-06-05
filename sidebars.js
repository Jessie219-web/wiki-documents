/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  ProductSidebar: [
    {
      type: 'doc',
      id: 'Getting_Started',
      label: 'Getting Started',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'weekly_wiki',
      label: 'Weekly Wiki',
      className: 'sideboard_calss',
    },
    {
      type: 'doc',
      id: 'Sensor',
      label: 'Sensing',
      className: 'sideboard_calss',
    },
  ]
}

module.exports = sidebars 