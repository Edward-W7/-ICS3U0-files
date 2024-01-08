/* import RiTa library */
let rita = require('rita');

/* take a sentence and split it up into tokens for analysis */
let rTokens = rita.tokenize(prompt(''));

syllables = 0;
adverbs = 0;
adjectives = 0;
nouns = 0;
verbs = 0;
// count the number of syllables, adverbs, adjectives, nouns, and verbs in the provided sentence
for (i in rTokens) {
	for (char in rita.syllables(rTokens[i])) {
		if (rita.syllables(rTokens[i])[char] == '/'){
			syllables += 1;
		}
	}
	syllables += 1;
	if (rita.isAdverb(rTokens[i])) {
		adverbs += 1;
	}
	if (rita.isAdjective(rTokens[i])) {
		adjectives += 1;
	}
	if (rita.isNoun(rTokens[i])) {
		nouns += 1;
	}
	if (rita.isVerb(rTokens[i])) {
		verbs += 1;
	}
}
console.log("Adjectives: " + adjectives);
console.log("Adverbs: " + adverbs);
console.log("Nouns: " + nouns);
console.log("Verbs: " + verbs);
console.log("Total syllables: " + syllables);
