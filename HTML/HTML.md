# HTML Essentials

## Introduction to HTML

HTML, or Hyper Text Markup Language, is the backbone of web development, providing a standardized way to structure and format content on the internet. In simple terms, HTML serves as the fundamental building block for creating and organizing websites.

### Understanding HyperText

HyperText is a method of organizing text that facilitates seamless linking and interaction between different elements within a web page.

### Markup Language

HTML operates as a markup language, allowing the addition of structure and formatting to text documents.

### HTML Elements

HTML elements follow a specific pattern:
```html
<opening tag>Content</closing tag>
```

## Basic HTML Structure

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Page Title</title>
    </head>
    <body>
        <p>This is a sample paragraph.</p>
    </body>
</html>
```

Key elements:
- `<!DOCTYPE html>`: Specifies the HTML version.
- `<html>`: The root element containing all other elements.
- `<head>`: Holds metadata about the webpage.
- `<body>`: Contains visible content.

## Block Elements vs Inline Elements

1. **Block Elements:**
   - Start on a new line.
   - Occupy full available width.
   - Example: `<p>`, `<div>`.

2. **Inline Elements:**
   - Do not start on a new line.
   - Occupy only necessary width.

## HTML Tags

1. `<p>`: Paragraph tag removes extra spaces and new lines.
2. `<pre>`: Preformatted text tag.

## Formatting - Bold, Italic, and Underline

```html
<p><b>This is bold</b>, <i>this is italic</i>, <u>and this is underlined</u>.</p>
```

## Headings

```html
<h1>Main Heading</h1>
<h2>Subheading 1</h2>
<!-- ... -->
<h6>Subheading 6</h6>
```

## Tables

```html
<table border="1">
    <tr>
        <th>Name</th>
        <th>Age</th>
    </tr>
    <tr>
        <td>John</td>
        <td>25</td>
    </tr>
</table>
```

## Lists

```html
<!-- Unordered List -->
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
    <li>First</li>
    <li>Second</li>
</ol>

<!-- Description List -->
<dl>
    <dt>Term 1</dt>
    <dd>Definition 1</dd>
    <dt>Term 2</dt>
    <dd>Definition 2</dd>
</dl>
```

## Hyperlinks

```html
<a href="https://www.example.com">Visit Example Website</a>
<a href="mailto:info@example.com">Send Email</a>
<a href="tel:+1234567890">Call Us</a>
```

## Images

```html
<img src="image.jpg" alt="Description of the image">
```

These HTML essentials provide the groundwork for creating well-structured and visually appealing web content. Understanding these concepts is crucial for anyone venturing into web development.

## Semantic HTML Tags

Semantic HTML tags provide meaning to the content they enclose, making it easier for both browsers and developers to understand the structure and purpose of the content. Here are some essential semantic tags along with examples:

### `<header>`

Represents the header of a document or a section.

```html
<header>
    <h1>Website Title</h1>
    <p>Welcome to our amazing website!</p>
</header>
```

### `<nav>`

Represents a navigation menu.

```html
<nav>
    <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#contact">Contact</a></li>
    </ul>
</nav>
```

### `<main>`

Represents the main content of the document.

```html
<main>
    <article>
        <h2>Article Title</h2>
        <p>Content of the article goes here.</p>
    </article>
</main>
```

### `<section>`

Represents a section of a document.

```html
<section>
    <h2>Section Title</h2>
    <p>Content of the section goes here.</p>
</section>
```

### `<aside>`

Represents content that is tangentially related to the content around it.

```html
<aside>
    <h3>Related Links</h3>
    <ul>
        <li><a href="#link1">Link 1</a></li>
        <li><a href="#link2">Link 2</a></li>
    </ul>
</aside>
```

### `<footer>`

Represents the footer of a document or a section.

```html
<footer>
    <p>&copy; 2023 Website Name</p>
</footer>
```

These semantic tags enhance the clarity and structure of your HTML code, making it more accessible and maintainable.
