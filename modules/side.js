// import {a, hello as h} from "./main.js";
// console.log(a);
// h();

// import all
import * as main from "./main.js";
main.hello();

//export/import defaulT

import {default as d} from "./main.js";
console.log(d);

// multiple modules 

import { show } from "./bridge.js";
show();