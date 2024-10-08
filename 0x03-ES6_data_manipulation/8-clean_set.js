export default function cleanSet(set, startString) {
  // Check if the set is not empty and the startString is not empty
  // and the set is an instance of Set and the startString is a string
  if (!set && !startString && !(set instanceof Set) && typeof startString !== 'string') {
    return '';
  }

  const restString = [];
  // Iterate over the set
  for (const value of set.values()) {
    // Check if the value starts with the startString and the startString is a string
    if (value.startsWith(startString) && typeof value === 'string') {
      const subString = value.substring(startString.length);
      if (subString !== value) {
        restString.push(subString);
      }
    }
  }

  // Return the new set
  return restString.join('-');
}
