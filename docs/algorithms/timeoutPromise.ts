const sleep = (timeout: number) => new Promise((resolve) => setTimeout(resolve, timeout));

const timeoutPromise = (promise: Promise<any>, timeout: number, timeoutMessage: string) => {
  let timer;
  return Promise.race([
    promise.then((value) => {
      if (timer) {
        clearTimeout(timer);
      }
      return value;
    }),
    new Promise((resolve, reject) => {
      timer = setTimeout(reject, timeout, new Error(timeoutMessage));
    }),
  ])
}