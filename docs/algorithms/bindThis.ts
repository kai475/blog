function bindThisWithCall(f: Function, target: Object) {
  return function() {
    return f.call(target, ...arguments);
  };
}

function bindThisWithApply(f: Function, target: Object) {
  return function() {
    return f.apply(target, arguments);
  }
}

function bindThis(f: Function, target: Object) {
  return f.bind(target);
}

