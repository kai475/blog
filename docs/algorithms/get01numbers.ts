/**
 * [0, 11111111]int => return 10, 1100, 1010, 1001,
 * 
 */

function combination(n, m) {
  let nFactorial = 1;
  for (let i = 2; i <= n; i++) {
    nFactorial *= i;
  }
  let mFactorial = 1;
  for (let i = 2; i <= m; i++) {
    mFactorial *= i;
  }
  let nMinusMFactorial = 1;
  for (let i = 2; i <= (n - m); i++) {
    nMinusMFactorial *= i;
  }
  const result = nFactorial / (mFactorial * nMinusMFactorial);
  console.log(n, m, result);
  return result;
}

// function combination(n, m) {
//   let up = n;
//   if (m === 0) return 0;
//   for (let i = 1; i <= m; i++) {
//     up *= n - i;
//   }
//   let down = m;
//   for (let i = 1; i <= m; i++) {
//     down *= m - i;
//   }
//   const result = up / down;
//   console.log(n, m, result);
//   return result;
// }

function getNumbers(min, max) {
  const maxBitWidth = String(max).length;
  let minBitWidth = String(min).length;
  if (minBitWidth % 2) minBitWidth += 1;
  if (maxBitWidth < 2) { return 0 }
  let result = 0;
  for (let i = minBitWidth; i <= maxBitWidth; i += 2) {
    result += combination(i - 1, i / 2 - 1);
  }
  return result / max;
}
