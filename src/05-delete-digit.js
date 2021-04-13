/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const minN = n.toString().split('').sort()[0];
  const arrN = n.toString().split('');
  const indexMin = arrN.indexOf(minN);
  arrN.splice(indexMin, 1);
  const result = arrN.join('');
  return +result;
}

module.exports = deleteDigit;
