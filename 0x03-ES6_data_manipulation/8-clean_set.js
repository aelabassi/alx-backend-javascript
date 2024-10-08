export default function cleanSet(set, startString) {
  const restString = [];
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }
  for (const value of set.values()) {
    if (value.startsWith(startString) && typeof value === 'string') {
      const subString = value.substring(startString.length);
      if (subString !== value && subString) {
        restString.push(subString);
      }
    }
  }
  return restString.join('-');
}
