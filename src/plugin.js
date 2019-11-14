module.exports = {
  audits: [
    { path: 'lighthouse-plugin-social-sharing/src/audits/twitter/card.js' },
    { path: 'lighthouse-plugin-social-sharing/src/audits/twitter/manual-check.js' }
  ],
  category: {
    title: 'Social sharing',
    description: 'These checks validate if meta tags are provided for displaying your website on social channel in a more engaging way.',
    auditRefs: [
      { id: 'twitter-card', weight: 1, group: 'twitter' },
      { id: 'twitter-manual-check', weight: 0, group: 'twitter' },
    ],
  },
  groups: {
    twitter: {
      title: 'Twitter'
    }
  }
};