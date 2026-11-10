/*
   Description: Lesson 12 - Objects example
   Author: Mr. Kowalczewski
   Date of last edit: November 10, 2026
*/

// ----- Part 1: An object as a collection -----
// key: value pairs, look up a value by its key
let marks = {'Andrew': 50, 'Billy': 85, 'Chloe': 92};

// ----- Part 2: An object that describes one thing -----
let tree = {
  x: 150,
  y: 420,
  size: 60,
  leafColour: 'green'
};

// ----- Part 3: An array of objects -----
let forest = [];

function setup() {
  createCanvas(600, 600);
  textSize(16);

  // ----- Getting, changing and adding values -----
  console.log(marks['Billy']);   // 85
  marks['Andrew'] = 55;          // change a value
  marks['Dina'] = 77;            // add a new pair

  // the key can be stored in a variable
  let name = 'Chloe';
  console.log(marks[name]);      // 92

  // ----- Checking if a key exists -----
  if (marks.hasOwnProperty('Billy')) {
    console.log('Billy is in the list');
  }

  // ----- Number of pairs -----
  console.log(Object.keys(marks).length); // 4

  // ----- Dot notation -----
  console.log(tree.x);           // 150
  console.log(tree['size']);     // 60, same as tree.size
  tree.hasApples = true;         // add a new key
  console.log(tree);

  // start the forest with two trees
  forest.push({ x: 350, y: 450, size: 40, leafColour: 'green' });
  forest.push({ x: 450, y: 470, size: 70, leafColour: 'orange' });
}

function draw() {
  background(200, 230, 255);
  noStroke();

  // ----- Looping through an object -----
  fill(0);
  text(`Marks (${Object.keys(marks).length} students):`, 20, 30);
  let y = 55;
  for (let name in marks) {
    text(`${name}: ${marks[name]}`, 20, y);
    y += 22;
  }

  // ----- Changing values -----
  // the single tree follows the mouse horizontally
  tree.x = mouseX;
  drawTree(tree);

  // ----- Looping through an array of objects -----
  for (let i = 0; i < forest.length; i += 1) {
    drawTree(forest[i]);
  }

  fill(0);
  text(`Click to add a tree. Trees in the forest: ${forest.length}`, 20, 250);
}

// ----- Passing an object to a function -----
function drawTree(t) {
  noStroke();
  fill('brown');
  rect(t.x - 5, t.y, 10, t.size);
  fill(t.leafColour);
  circle(t.x, t.y, t.size);
}

function mousePressed() {
  // create a new object and add it to the array
  let newTree = {
    x: mouseX,
    y: mouseY,
    size: random(30, 90),
    leafColour: random(['green', 'darkgreen', 'orange', 'red'])
  };
  forest.push(newTree);
}
