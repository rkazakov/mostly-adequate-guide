require('../../support');
var _ = require('ramda');


// Exercise 1
//==============
// Refactor to remove all arguments by partially applying the function

var words = function(str) {
  return split(' ', str);
};

const wordsFP = _.split(' ');

console.log(wordsFP('This is me!'));

// Exercise 1a
//==============
// Use map to make a new words fn that works on an array of strings.

var sentences = _.map(wordsFP);

console.log(sentences(['This is me!', 'And this is you!']));

// Exercise 2
//==============
// Refactor to remove all arguments by partially applying the functions

var filterQs = function(xs) {
  return filter(function(x){ return match(/q/i, x);  }, xs);
};

const filterQsFP = _.filter(match(/q/i));

console.log(filterQsFP(['myq', 'yourq', 'not you']));

// Exercise 3
//==============
// Use the helper function _keepHighest to refactor max to not reference any arguments

// LEAVE BE:
var _keepHighest = function(x,y){ return x >= y ? x : y; };

// REFACTOR THIS ONE:
var max = function(xs) {
  return reduce(function(acc, x){
    return _keepHighest(acc, x);
  }, -Infinity, xs);
};

const maxFP = _.reduce(_keepHighest, -Infinity);

console.log(maxFP([1, 5, 9, 4]));

// Bonus 1:
// ============
// wrap array's slice to be functional and curried.
// //[1,2,3].slice(0, 2)
var slice = _.curry((start, end, xs) => xs.slice(start, end));


// Bonus 2:
// ============
// use slice to define a function "take" that takes n elements. Make it curried
var take = slice(0);


module.exports = { words: words,
                   sentences: sentences,
                   filterQs: filterQs,
                   max: max,
                   slice: slice,
                   take: take
                 };
