import * as toxicity from '@tensorflow-models/toxicity'

export const toxicityClassifier = (message) => {
// The minimum prediction confidence.
const threshold = 0.9;
const toxicityLabels = [
  "identity_attack",
  "insult",
  "obscene",
  "severe_toxicity",
  "sexual_explicit",
  "threat",
  "toxicity",
];

// Load the model. Users optionally pass in a threshold and an array of
// labels to include.
toxicity.load(threshold, toxicityLabels).then(model => {
  const sentences = [message];

  model.classify(sentences).then(predictions => {
    // `predictions` is an array of objects, one for each prediction head,
    // that contains the raw probabilities for each input along with the
    // final prediction in `match` (either `false` or `true`).
    // If neither prediction exceeds the threshold, `match` is `null`.

    console.log(predictions);
    /*
    prints:
    {
      "label": "identity_attack",
      "results": [{
        "probabilities": [0.9659664034843445, 0.03403361141681671],
        "match": false
      }]
    },
    {
      "label": "insult",
      "results": [{
        "probabilities": [0.08124706149101257, 0.9187529683113098],
        "match": true
      }]
    },
    ...
     */
  });
});
};