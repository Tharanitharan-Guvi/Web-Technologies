# DOM Manipulation

## Introduction to DOM

The Document Object Model (DOM) is a programming interface that represents the structure of a document as a tree of objects. In web development, the document usually refers to an HTML or XML document. The DOM provides a way to interact with and manipulate the content and structure of a document using programming languages like JavaScript.

## How to Access DOM Elements?

Accessing DOM elements is a fundamental part of DOM manipulation. You can use various methods to select and interact with elements:

### Example:

```javascript
// By ID
const elementById = document.getElementById("myElementId");

// By class name
const elementsByClass = document.getElementsByClassName("myClassName");

// By tag name
const elementsByTag = document.getElementsByTagName("div");
```

## How to Modify an Element?

Once you've accessed an element, you can modify its content, attributes, or other properties:

### Example:

```javascript
// Change text content
elementById.textContent = "New text content";

// Change attribute value
elementById.setAttribute("src", "new-image.jpg");

// Modify HTML content
elementById.innerHTML = "<p>New HTML content</p>";
```

## Events and Event Handling

Events are actions or occurrences that happen in the browser, like clicking a button or resizing the window. Event handling allows you to respond to these events:

### Example:

```javascript
// Add click event listener
elementById.addEventListener("click", function () {
  alert("Element clicked!");
});
```

## How to Manipulate Styles?

You can dynamically change the styles of an element using JavaScript:

### Example:

```javascript
// Change CSS styles
elementById.style.color = "blue";
elementById.style.fontSize = "18px";
```

## How to Create, Modify, and Delete Elements?

You can create, modify, and delete elements using DOM methods:

### Example:

```javascript
// Create a new element
const newElement = document.createElement("div");

// Modify element
newElement.textContent = "New element content";
newElement.setAttribute("class", "newElementClass");

// Append to the document
document.body.appendChild(newElement);

// Delete element
document.body.removeChild(elementById);
```

### Example Talked in Class

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <button id="create" type="button">Create</button>
    <button id="delete" type="button">Delete</button>
    <script src="main.js"></script>
  </body>
</html>
```

```javascript
// Basic Structure of a To-Do App

const createBtn = document.getElementById("create");

createBtn.addEventListener("click", function () {
  const newElement = document.createElement("p");
  newElement.textContent = "I have newly added this para";
  newElement.setAttribute("id", "newElement");
  document.body.appendChild(newElement);
});

const deleteBtn = document.getElementById("delete");

deleteBtn.addEventListener("click", function () {
  const element = document.getElementById("newElement");
  document.body.removeChild(element);
});
```

In summary, DOM manipulation is a powerful tool for web developers, enabling them to dynamically interact with and modify the content and structure of a document. Understanding how to access elements, handle events, manipulate styles, and create, modify, and delete elements is crucial for building dynamic and interactive web applications.
