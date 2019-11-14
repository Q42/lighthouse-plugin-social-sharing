const Audit = require('lighthouse').Audit;

class TwitterCardAudit extends Audit {
  static get meta() {
    return {
      id: 'twitter-card',
      title: 'Card type is correctly set',
      failureTitle: 'Card type is not (correctly) set',
      description: 'Setting a card type displays your website in a more engaging way.',
      requiredArtifacts: ['MetaElements'],
    };
  }

  static audit(artifacts) {
    const metaTag = artifacts.MetaElements.find(el => el.name === 'twitter:card');

    if (metaTag && 
      metaTag.content && 
      metaTag.content.match(/^(summary|summary_large_image|app|player)$/)) {
      return {
        score: 1
      }
    } else {
      return {
        score: 0
      }
    }
  }
}

module.exports = TwitterCardAudit;