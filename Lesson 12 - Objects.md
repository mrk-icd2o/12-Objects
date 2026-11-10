# Lesson 12 - Objects

An array stores values in order, and we find each value by its **index** (0, 1, 2...). Sometimes a number isn't a useful way to find something. If we want Billy's mark, we don't want to remember that Billy is at index 1. We want to look it up by his **name**.

**Objects** let us store data as **key/value pairs**. The key is a label, and we use it to look up the value.

## Part 1: Objects as a Collection

```javascript
let marks = {'Andrew': 50, 'Billy': 85, 'Chloe': 92};
```

- The object is surrounded by curly braces `{ }`.
- Each pair is written as `key: value`.
- Pairs are separated by commas.
- Each key can only appear once. Values can be any type.

Like an array, this is a **collection**: many related values stored in one variable. The difference is how we find each value.

| Array | Object |
| --- | --- |
| `[50, 85, 92]` | `{'Andrew': 50, 'Billy': 85, 'Chloe': 92}` |
| find a value by its index | find a value by its key |
| `marks[1]` | `marks['Billy']` |

### Getting, Changing and Adding Values

Use square brackets with the key:

```javascript
console.log(marks['Billy']);  // 85

marks['Andrew'] = 55;         // change a value
marks['Billy'] += 5;          // modify a value
marks['Dina'] = 77;           // add a new key/value pair
```

The key can also be stored in a variable:

```javascript
let name = 'Chloe';
console.log(marks[name]);     // 92
```

### Removing a Pair

```javascript
delete marks['Billy'];
```

### Checking if a Key Exists

```javascript
if (marks.hasOwnProperty('Billy')) {
  console.log('Billy is in the list');
}
```

Don't check with `if (marks['Billy'])`. If Billy's mark is `0`, the if statement treats it as false, even though Billy is in the list.

### How Many Pairs?

Objects don't have `.length`. Instead, get an array of the keys using `Object.keys()` and check its length:

```javascript
console.log(Object.keys(marks).length);  // 4
```

### Looping Through an Object

A `for...in` loop gives you each **key**, one at a time:

```javascript
for (let name in marks) {
  console.log(`${name} got ${marks[name]}`);
}
```

## Part 2: Objects That Describe One Thing

Objects are also used to group everything about **one thing**. Each key is a property of that thing.

```javascript
let tree = {
  x: 200,
  y: 300,
  size: 50,
  leafColour: 'green'
};
```

Think of a contact in your phone: one contact has a name, a phone number and an email. Each of those is a key with a value.

When the keys are simple names like these, the quotes are optional. You can also use a **dot** instead of square brackets:

```javascript
console.log(tree.x);          // 200
tree.size = 80;               // change a value
tree.hasApples = true;        // add a new key

circle(tree.x, tree.y, tree.size);
```

### Dot or Brackets?

`tree.size` and `tree['size']` do the same thing. If the key is stored in a **variable**, you must use brackets:

```javascript
let whichKey = 'y';
console.log(tree[whichKey]);  // 300
console.log(tree.whichKey);   // undefined (looks for a key called "whichKey")
```

This is why Part 1 used brackets: in `marks[name]`, the key is in a variable.

### Objects and Functions

Since the object holds everything about one tree, we can pass the whole object to a function instead of many separate parameters:

```javascript
function drawTree(t) {
  fill('brown');
  rect(t.x - 5, t.y, 10, t.size);
  fill(t.leafColour);
  circle(t.x, t.y, t.size);
}

drawTree(tree);
```

## Part 3: Arrays of Objects

To draw many trees with arrays alone, we'd need one array for x, one for y, one for size and one for colour, all kept lined up. Instead, we can have **one array of tree objects**:

```javascript
let forest = [];

forest.push({ x: 100, y: 300, size: 40, leafColour: 'green' });
forest.push({ x: 250, y: 320, size: 60, leafColour: 'orange' });

for (let i = 0; i < forest.length; i += 1) {
  drawTree(forest[i]);
}
```

`forest[i]` is one tree object, so `forest[i].x` is that tree's x value.

> **Coming up:** Most data on the internet is shared as objects and arrays (a format called JSON). In a later lesson, we will load data like this from files and websites.
