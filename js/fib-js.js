
let n = Number(process.argv[2]);
let a = BigInt(0);
let b = BigInt(1);
for (let i = 0; i < n; i++) {
    let tmp = a + b;
    b = a;
    a = tmp;
}
console.log(a.toString(10));
