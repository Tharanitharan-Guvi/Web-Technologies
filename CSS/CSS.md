# Introduction to CSS

CSS, or Cascading Styles Sheets, is a way to style and present HTML. While HTML provides the meaning or content, the style sheet focuses on the presentation of that document.

Styles in CSS have a format of `property: value`, and most properties can be applied to various HTML tags.

## Three ways to apply CSS to HTML

### Inline

Inline styles are added directly into HTML tags using the `style` attribute. For example:

```html
<p style="color: red">text</p>
```

### Internal

Internal styles are embedded in the HTML file within the `style` tags in the head element. Example:

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Example</title>
    <style>
        p {
            color: red;
        }
        a {
            color: blue;
        }
    </style>
</head>
<!-- ... rest of the HTML document -->
```

### External

External styles are used for entire websites across multiple pages. They are stored in a separate CSS file, such as "style.css":

```css
p {
    color: red;
}
a {
    color: blue;
}
```

And linked in the HTML like this:

```html
<!DOCTYPE html>
<html>
<head>
    <title>CSS Example</title>
    <link rel="stylesheet" href="style.css">
</head>
<!-- ... rest of the HTML document -->
```

## Selectors, Properties, and Values

Selectors in CSS are names given to styles. HTML selectors are names of HTML tags used to change the style of a specific type of element.

A value is given to the property following a colon, and semi-colons are used to separate properties.

Example:

```css
body {
    font-size: 14px;
    color: navy;
}
```

Common units used in CSS include:
- `px` (pixels)

## Colors

CSS provides various ways to specify colors, such as names, RGB values, or hex codes. Example:

```
red
rgb(255,0,0)
rgd(100%, 0%, 0%)
#ff0000
```

## Text

### `font-size`

Sets the size of the font.

### `font-weight`

Specifies whether the text is bold or not.

font-weight states whether the text is bold or not. Most commonly this is used as font-weight: bold or font-weight: normal but other values are bolder, lighter, 100, 200, 300, 400 (same as normal), 500, 600, 700 (same as bold), 800 or 900.

### `font-family`

Specifies the font itself, such as Times New Roman or Arial.

Example:

```css
font-family: arial, helvetica, serif;
```

### `text-align`

Aligns the text inside an element to left, right, center, or justify.

```css
text-align: right;
```

### `text-transform`

Changes the case of the text.

Example:

```css
text-transform: uppercase;
text-transform: capitalize /*turns the first letter of every word into uppercase.*/
text-transform: uppercase /*turns everything into uppercase.*/
text-transform: lowercase /*turns everything into lowercase.*/
text-transform: none
```

### Text Decoration


Specifies whether the text has a line under, over, or through it.

Example:

```css
text-decoration: underline; /*does what you would expect.*/
text-decoration: overline; /*places a line above the text.*/
text-decoration: line-through; /*puts a line through the text (“strike-through”).*/

This property is usually used to decorate links and you can specify no underline with text-decoration: none.
```
### Margins and Padding

`margin` and `padding` are the two most commonly used properties for spacing-out elements. A margin is the space outside something, whereas padding is the space inside something.

Change the CSS code for h2 to the following:

```css
h2 {
    font-size: 1.5px;
    background-color: #ccc;
    margin: 20px;
    padding: 40px;
}
```


This leaves a 20-pixel width space around the secondary header, and the header itself is fat from the 40-pixel width padding.

The four sides of an element can also be set individually: `margin-top`, `margin-right`, `margin-bottom`, `margin-left`, `padding-top`, `padding-right`, `padding-bottom`, and `padding-left` are the self-explanatory properties you can use.

## The Box Model

Margins, padding, and borders (see next page) are all part of what’s known as the Box Model. The Box Model works like this: in the middle, you have the content area (let’s say an image), surrounding that you have the padding, surrounding that you have the border, and surrounding that you have the margin. It can be visually represented like this:

- Margin box
- Border box
- Padding box
- Element box

You don’t have to use all of these, but it can be helpful to remember that the box model can be applied to every element on the page, and that’s a powerful thing!


## Borders

Borders can be applied to most HTML elements within the body.

To make a border around an element, all you need is `border-style`. The values can be `solid`, `dotted`, `dashed`, `double`, `groove`, `ridge`, `inset`, and `outset`.

Example for h2:

```css
h2 {
    border-style: dashed;
    border-width: 3px;
    border-left-width: 10px;
    border-right-width: 10px;
    border-color: red;
}

#first{
    border: 1px solid black;
}
```

This leaves a dashed border around the h2 element with different widths for the left and right sides and a red color.