export default function sort(array, type) {
  if (array && array.length > 1) {
    switch (type) {
      case 'most':
        return array.sort((a, b) => (a.name < b.name ? -1 : 1));
      case 'low':
        return array.sort((a, b) => a.cost - b.cost);
      case 'high':
        return array.sort((a, b) => b.cost - a.cost);
      default:
        return array;
    }
  }
  return array;
}
