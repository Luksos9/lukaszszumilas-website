---
title: "How to turn on ECMAScript 2021 in ServiceNow ?"
description: "1) Upgrade instance to at least Tokyo 🌆 2) Create a new app 💽 3) Navigate to \"sys_app\" page 🧭 4) Switch \"JavaScript Mode\" to ECMAScript 2021 🔄 5) Save ✅..."
pubDate: 2023-11-11
tags: ["servicenow"]
heroImage: "/images/blog/how-to-turn-on-ecmascript-2021-in-servicenow-hero-blog-imagesasda.png"
ghostSlug: "how-to-turn-on-ecmascript-2021-in-servicenow"
draft: false
---

1) Upgrade instance to at least Tokyo 🌆  
2) Create a new app 💽  
3) Navigate to "sys\_app" page 🧭  
4) Switch "JavaScript Mode" to ECMAScript 2021 🔄  
5) Save ✅

or

1) Get at least Utah instance (it is done upfront)

---

## What is Supported in ECMAScript 2021 in ServiceNow?

### "const":

Previously, using "const" would display an error, but still allow the record to be saved. Since Tokyo, "const" can be used to declare variables that should never change.

>   
> // Code  
> const y = 100;

---

## "let":

"let" allows block scoping, does not create a global object property, and cannot redeclare a variable in the same scope.

>   
> // Code  
> let y = 200;

---

## "Arrow Functions":

"Arrow functions" provide a more compact syntax for writing function expressions.

>   
> // Code  
> let addDescriptions = (x, y) => x + '\\n'+ y;

---

## "for...of":

This loop creates a loop iterating over iterable objects.

>   
> // Code  
> for (let inc of incidents) { // ... }

---

## "Map":

ServiceNow supports the "Map" object, which holds key-value pairs and remembers the original insertion order of the keys.

>   
> // Code  
> const incidents = new Map();

---

## Set:

The "Set" object lets you store unique values of any type. ES5 doesn't have Set, so usually you would need to use obj to store unique values. ECMAScript 2021 supports this feature, promoting faster performance and uniqueness of values.

>   
> // Code  
> let incidents = new Set();

---

## "Spread Operator":

The spread syntax allows an iterable such as an array to be expanded in places where zero or more arguments are expected.

>   
> // Code  
> const incidents\_obj = { ...incidents};

---

## "Template Literals":

"Template literals" are supported, allowing for multi-line strings and string interpolation. (No need for escape characters like /n)

>   
> // Code  
> let x = `hello world`;

---

## "Destructuring":

"Destructuring" assignment is a convenient way of extracting multiple values from data stored in objects and arrays.

>   
> // Code  
> const { a, b } = obj;

---

## And more ...

Please be aware that the new features are available on scoped apps only! ⛔

  
Global scope support is on the roadmap. 🗺

  
With these features, ServiceNow allows more modern JavaScript. 😎
