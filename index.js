// Three variables are defined for us: people, verbs, nouns
var people = ["Alice", "Bob", "Carol"];
var verbs = ["yelps", "chatters", "blurts"];
var nouns = ["turtle", "book", "tomato"];

// Pass each variable to the MadLibs function as an argument
function madlibs(people, verbs, nouns) {
  // Use the given method for selecting a random item from an array.
  var person = people[Math.floor(Math.random() * people.length)];
  var verb = verbs[Math.floor(Math.random() * verbs.length)];
  var noun = nouns[Math.floor(Math.random() * nouns.length)];

  // Insert the randomly selected item from each array into the sentence.
  return person + " " + verb + " about the " + noun + ".";
}
