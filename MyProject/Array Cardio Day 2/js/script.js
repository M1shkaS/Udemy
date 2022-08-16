// ## Array Cardio Day 2

const people = [
   { name: 'Wes', year: 1988 },
   { name: 'Kait', year: 1986 },
   { name: 'Irv', year: 1970 },
   { name: 'Lux', year: 2015 }
];

const comments = [
   { text: 'Love this!', id: 523423 },
   { text: 'Super good', id: 823423 },
   { text: 'You are the best', id: 2039842 },
   { text: 'Ramen is my fav food ever', id: 123523 },
   { text: 'Nice Nice Nice!', id: 542328 }
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAdult = people.some(person => {
   const currentDate = (new Date()).getFullYear();

   return currentDate - person.year >= 19;
})
// console.log({ isAdult });

// Array.prototype.every() // is everyone 19 or older?
const isAllAdults = people.every(person => {
   const currentDate = (new Date()).getFullYear();

   return currentDate - person.year >= 19
})
// console.log(isAllAdults);

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423

const comment = comments.find(comment => {
   return comment.id === 823423;
})
// console.log(comment);

// Array.prototype.findIndex()
const commentIndex = comments.findIndex(comment => {
   return comment.id === 823423;
})
// console.log(commentIndex);

// Find the comment with this ID
// delete the comment with the ID of 823423

// const newComments = [...comments.splice(commentIndex, 1)];

const newComments = [
   ...comments.slice(0, commentIndex),
   ...comments.slice(commentIndex + 1)
]

console.log(newComments);
