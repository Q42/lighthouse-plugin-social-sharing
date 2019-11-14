const Audit = require('lighthouse').Audit;

class TwitterManualAudit extends Audit {
  static get meta() {
    return {
      id: 'twitter-manual-check',
      title: 'Page can be fetched correctly by Twitter',
      description: 'Run the [Twitter Card Validator](https://cards-dev.twitter.com/validator) on your production website.',
      requiredArtifacts: [],
      scoreDisplayMode: Audit.SCORING_MODES.MANUAL,
    };
  }

  static audit() {
    return {
      score: 0,
    };
  }
}

module.exports = TwitterManualAudit;