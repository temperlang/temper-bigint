
import { Integer } from "bigint/bigint";

let a = Integer.fromInt(0);
let b = Integer.fromInt(1);
for (var i = 0; i < 100; i++) {
    let tmp = a.add(b);
    b = a;
    a = tmp;
}
console.log(a.toString());
