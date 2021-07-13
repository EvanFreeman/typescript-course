import { NumberCollection } from "./NumberCollection";
import { Sorter } from "./Sorter";

const col = new NumberCollection([10, 3, -5, 0]);
const sorter = new Sorter(col);
sorter.sort();
console.log(col.data);
