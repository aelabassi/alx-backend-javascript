export default function cleanSet(set, startString) {
  const restString = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (typeof value === 'string' && value.startsWith(startString)) {
      const subString = value.substring(startString.length);
      if (subString && subString !== value) {
        restString.push(subString);
      }
    }
  }
  return restString.join('-');
}
