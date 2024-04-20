
import { Integer } from 'temper-bigint';

const pad = (obj, n) => {
  let res = obj.toString();
  for (let i = n - res.length; i > 0; i--) {
    res = '0' + res;
  }
  return res;
};

const zero = Integer.fromInt(0);
const one = Integer.fromInt(1);
const ten = Integer.fromInt(10);

const main = (n) => {
  let i = 0;
  let ns = 0;
  let k = 0;
  let k2 = 1;
  let acc = zero;
  let den = one;
  let num = one;
  let len = 0;
  
  while (i < n) {
    k += 1;
    k2 += 2;
  
    const k2big = Integer.fromInt(k2);
    acc = acc.add(num.shl(1));
    acc = acc.mul(k2big);
    den = den.mul(k2big);
    num = num.mul(Integer.fromInt(k));
  
    if (num.cmp(acc) > 0) {
      continue;
    }
  
    const tmp = num.add(num.shl(1)).add(acc);
    const d3 = tmp.div(den);
    const d4 = tmp.add(num).div(den);
  
    if (d3.cmp(d4) != 0) {
      continue;
    }
  
    process.stdout.write(d3.toInt().toString());

    len += 1;

    if (len >= 50) {
      process.stdout.write('\n');
      len = 0;
    }
  
    i += 1;

    if (i >= n) {
      break;
    }
  
    acc = acc.sub(den.mul(d3)).mul(ten);
    num = num.mul(ten);
  }
};

const n = Number(process.argv[2]);
main(n);
