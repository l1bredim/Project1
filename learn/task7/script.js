//intersection 100%version
function union(...arrays) {
  return arrays.reduce((acc, array) => {
    return acc.concat(array.filter((item) => !acc.includes(item)));
  });
}
