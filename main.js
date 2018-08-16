npm WARN project@1.0.0 No repository field.
$ npm run build

> project@1.0.0 build /home/ccuser/workspace/le
arn-javascript-transpilation-bct-transpilation-
with-babel
> babel src -d lib

src/main.js -> lib/main.js
$ cat lib/main.js
"use strict";

var pasta = "Spaghetti"; // ES5 syntax

var meat = "Pancetta"; // ES6 syntax

var sauce = "Eggs and cheese"; // ES6 syntax

// Template literals, like the one below, were
introduced in ES6
var carbonara = "You can make carbonara with "
+ pasta + ", " + meat + ", and a sauce made wit
h " + sauce + ".";$
