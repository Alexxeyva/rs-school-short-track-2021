/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const namesArr = names;
  const namesSet = [...new Set(namesArr)];
  for (let i = 0; i < namesSet.length; i++) {
    let counter = 0;
    for (let j = 0; j < namesArr.length; j++) {
      if (namesArr[j] === namesSet[i]) {
        if (counter === 0) {
          namesArr[j] = namesSet[i];
        } else {
          namesArr[j] = `${namesSet[i]}(${counter})`;
        }
        counter++;
      }
    }
  }
  return namesArr;
}

module.exports = renameFiles;
