export default function updateUniqueItems(map) {
  if (!map || !(map instanceof Map)) {
    return 'Cannot process';
  }
  for (const [key, item] of map) {
    if (item === 1) {
      map.set(key, 100);
    }
  }
  return map;
}
