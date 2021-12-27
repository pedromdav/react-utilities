/**
 * Wrapper to create a debouncing version of a function
 * More info at: https://www.joshwcomeau.com/snippets/javascript/debounce/
 * To use with React wrap the function with useMemo
 * @param callback function to be called after wait
 * @param wait period to wait before calling the function in milliseconds
 * @returns returns a function that debounces
 */
const debounce = (callback: Function, wait: number) => {
  let timeoutId = null;
  return (...args: any) => {
    window.clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => {
      callback.apply(null, args);
    }, wait);
  };
};

export default debounce;