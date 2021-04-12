/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */

function sortByHeight(arr) {
  const numArr = arr.filter((item) => item !== -1).sort((a, b) => a - b);

  const oneArr = [];
  arr.filter((elem, index) => {
    if (elem === -1) {
      oneArr.push(index);
    }
    return oneArr;
  });

  for (let i = 0; i < oneArr.length; i++) {
    numArr.splice(oneArr[i], 0, -1);
  }
  return numArr;
}

module.exports = sortByHeight;
