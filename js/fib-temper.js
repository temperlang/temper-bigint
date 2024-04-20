
import { Integer } from 'temper-bigint';

let n = Number(process.argv[2]);
let a = Integer.fromInt(0);
let b = Integer.fromInt(1);
for (let i = 0; i < n; i++) {
    let tmp = a.add(b);
    b = a;
    a = tmp;
}
console.log(a.toString(10));
