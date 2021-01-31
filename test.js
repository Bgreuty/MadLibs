// These are a few simple tests we'll run against your code.

var people = ["Alice", "Bob", "Carol"];
var verbs = ["yelps", "chatters", "blurts"];
var nouns = ["turtle", "book", "tomato"];

var regex = new RegExp(/(Alice|Bob|Carol) (yelps|chatters|blurts) about the (turtle|book|tomato)./)

if (typeof madlibs !== "function") {
    console.log("We couldn't find a function named `madlibs`. Make sure it is named exactly `madlibs` (all lower case)");
  process.exit(1);
}

if (madlibs.length !== 3) {
  console.log("Your madlibs function should have 3 arguments(people, verbs, nouns). Yours has " + madlibs.length);
  process.exit(1);
}

var result = madlibs(people, verbs, nouns);

if (typeof result === "undefined") {
  console.log("Remember to `return` in your madlibs function.");
  process.exit(1);
}

if (!result.match(regex) || result.match(regex).length == false) {
  console.log("The result from your madlibs function did not match what we expected.\nResult was '" + result + "'\nWe expected something matching the format:\n'{person} {verb} about the {noun}.'");
  process.exit(1);
}

console.log("Success! Here's your madlibs function output:\n" + result + "\nHit the \"Run Code\" button to try it out again!");
