import { Integer } from "temper-bigint";


const pad = (obj, n) => {
  let res = obj.toString();
  for (let i = n - res.length; i > 0; i--) {
    res = '0' + res;
  }
  return res;
};

const main = (n) => {
  let i = 0;
  let ns = 0;
  let k = 0;
  let k2 = 1;
  let acc = 0n;
  let den = 1n;
  let num = 1n;
  let len = 0;
  
  while (i < n) {
    k += 1;
    k2 += 2;
  
    acc += num << 1n;
    acc *= BigInt(k2);
    den *= BigInt(k2);
    num *= BigInt(k);
  
    if (num > acc) {
      continue;
    }
  
    const tmp = num + (num << 1n) + acc;
    const d3 = tmp / den;
    const d4 = (tmp + num) / den;
  
    if (d3 !== d4) {
      continue;
    }
  
    process.stdout.write(Number(d3).toString());
    
    len += 1;

    if (len >= 50) {
      process.stdout.write('\n');
      len = 0;
    }

    i += 1;
  
    if (i >= n) {
      break;
    }
  
    acc -= den * d3;
    acc *= 10n;
    num *= 10n;
  }
};

const n = Number(process.argv[2]);
main(n);
