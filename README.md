# Lab 12 - Key Counter and Bubbles

You will be writing your code in `sketch.js` within the main folder - not the `example/` folder.

[Re-create this sketch](https://openprocessing.org/sketch/3059480/embed/?plusEmbedHash=24872cb6&userID=175929&plusEmbedTitle=true&show=sketch).  Complete Part 1 and Part 2 below, and optionally Part 3 all in the same sketch.

## Part 1 - Key Counter

Keep track of how many times each key on the keyboard is pressed.

- Create an empty object called `keyCounts` to store the counts. Each **key** in the object is a keyboard key (`'a'`, `'b'`...), and its **value** is how many times it has been pressed.

- When a key is pressed:
  - if it is already in `keyCounts`, add 1 to its count
  - otherwise, add it to `keyCounts` with a count of 1

- Use a `for...in` loop to display every key and its count on the left side of the screen, one per line (for example `a: 3`).

- Display how many **different** keys have been pressed.

## Part 2 - One Bubble

Create a bubble that floats up the right side of the screen.

- The bubble is an **object** with these keys: `x`, `y`, `size`, `speed` and `colour`.

- Write a function `drawBubble()` that receives one bubble object and draws it.

- Every frame, the bubble moves up by its `speed`.

- When the bubble floats off the top of the screen, move it back to the bottom with a new random `size`, `speed` and `colour`.

## Challenge - Many Bubbles

- Store your bubbles in **one array** of objects instead of a single bubble.

- When the mouse is clicked, create a new bubble at the mouse position with a random size, speed and colour, and add it to the array.

- Use your `drawBubble()` function to draw every bubble in the array.

- When a bubble floats off the top of the screen, remove it from the array (hint: `.splice()`).

- Display the number of bubbles on the screen. It should go up when you click and back down as bubbles leave.

Remember to:

- Update the header

- Include comments
