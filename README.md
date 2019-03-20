# Introduction

This is a common js tool library, which contains a lot of public methods, it can save you from repeating trivia, and most of its methods support nodejs and browser environment, I hope you will like it!

# Principle

The library doesn't contains very ordinary common methods.

So you can use `moment`,`jQuery`,`underscore` and more with the library.

# Run

- If you need rebuild it,keep nodejs >= 8.0

```javascript
npm run dev//To build files in development environment
npm run dist//To build files in production environment
npm run test//To run unit test
```

# Usage

```bash
npm install --save x-js-kit
```

```javascript
//Import the whole module
//Or import "./dist/index.polyfill" with polyfill
import JsKit from "x-js-kit"
...your code...
```

```javascript
//Import part of module
import stopWatch from "x-js-kit/lib/timer/stopWatch"
...your code...
```

# Notice

- To ensure that the commit log format is consistent, please use `npm run ct` to commit the code

# Change log

https://github.com/xucongli1989/x-js-kit/blob/master/CHANGELOG.md