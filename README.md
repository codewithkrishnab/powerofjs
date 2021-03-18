# Power Of JS
This simple cheatsheet allows you to experience the powers of JavaScript without any professional knowledge in JavaScript

## Installation
Add this to before you scripts and inside body
```html
<script src="https://cdn.jsdelivr.net/gh/codewithkrishnab/powerofjs/Cheatfc.js"></script>
```
#### Example
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<!-- Elements -->
    <h1> Hello this is Krishnab </h1>
    
    
    <!-- Enter your cdn after elements -->
    <script src="https://cdn.jsdelivr.net/gh/codewithkrishnab/powerofjs/Cheatfc.js"></script>
    <!-- Enter all your scripts after this -->
    <script>
    //Copy your first script's js path from developer tools and paste it to a var
    var newscript = sel("body > script:nth-child(1)";
    // Now make the lexian variable `scripts` equal to newscript
    scripts = newscript;
    </script>
</body>
</html>
```
## Currently added features

######  1. Select elements without having to write too long
#### Usage 
```javascript
sel(some refrence to element)
```
#### Examples
```javascript
sel("p") //Select a paragraph element
sel(".classname") // Select an element with class "classname"
sel("#elementid") // Select an element with id elementid
```

###### 2. Add Global Styles
#### Usage
```javascript
ags(css)
```
Where css is css defined by the coder
#### Examples
```javascript
ags(".classname{color: cyan}")
ags("#elementid{color: red}")
```
###### 3. Create element and append to body
```
Note: There are multiple features inside this function
```
#### Usage
```javascript
ceab(element, someclass, id, innerHTML, css)
```
Where 
* element - Name of element
* someclass - ClassName of element created
* id - Id of the element created
* innerHTML - The html you want to set inside the element created
* css - Add some styling to the element created

```
Note: css is set by the element's classname you created
```
#### Examples

```javascript
ceab("p"); // Create a paragraph element
ceab("p", "someclass"); // Set class of the element as some class
ceab("p", "someclass", "someid"); // Set class of the element as someclass and id as someid
ceab("p", "", "someid"); // Set id as someid and don't set class of the element
ceab("p", "someclass", "someid", "Some innerHTML");// Set innerHTML of the element as Some innerHTML and set class someclass and id as someid
ceab("p", "someclass", "someid", "Some innerHTML", "color: cyan") // Set class of the element as some class, id as someid and style the element with color cyan
ceab("p", "someclass", "", "You will see this in your browser", "color: cyan"); // Set class as someclass and give class and give styling as color cyan
```
```
Note: Don't use css without setting class
Note: Don't use only white spaces in class and id otherwise the element will be created but with no classname and no id
```
###### 4. Console.log with some color and background
#### Usage
```javascript
cc("Hey this is made by Krishnab Sarkar")
//Will return `Hey this is made by Krishnab Sarkar` normally
cc("Hey this is made by Krishnab Sarkar and is in color cyan", "cyan")
// Will return `Hey this is made by Krishnab Sarkar and is in color cyan` in color cyan

cc("Hey this is made by Krishnab Sarkar and is in color white over background red", "white", "red")
//Will return `Hey this is made by Krishnab Sarkar and is in color white over background red` in color white and background red\
```
