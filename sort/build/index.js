"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var NumberCollection_1 = require("./NumberCollection");
var Sorter_1 = require("./Sorter");
var col = new NumberCollection_1.NumberCollection([10, 3, -5, 0]);
var sorter = new Sorter_1.Sorter(col);
sorter.sort();
console.log(col.data);
