interface Array<T> {
  uniq: () => Array<T>;
}

Array.prototype.uniq = function() {
  return [...new Set(this)];
}

Array.prototype.uniq = function () {
  let hasNaN = false;
  return this.filter((val, index) => {
    const _index = this.indexOf(val);
    if (_index === -1 && !hasNaN) {
      hasNaN = true;
      return true;
    }
    if (_index === index) return true;
    return false;
  });
}


