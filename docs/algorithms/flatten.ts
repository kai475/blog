interface Array<T> {
  flatten: () => Array<T>;
}

Array.prototype.flatten = function () {
  return this.reduce(
    (accumulator, currentValue) => accumulator.concat(
      (currentValue instanceof Array) ? this.flatten(currentValue) : currentValue
    ),
    []
  );
};

Array.prototype.flatten = () => {
  let ret = [];
  this.forEach((element) => {
    if (element instanceof Array) {
      ret.push(...this.flatten(element));
    } else {
      ret.push(element);
    }
  });
  return ret;
};