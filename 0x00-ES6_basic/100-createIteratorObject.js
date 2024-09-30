export default function createIteratorObject(report) {
  return (
    function* _() {
      for (const dep of Object.values(report.allEmployees)) {
        for (const empl of dep) {
          yield empl;
        }
      }
    }());
}
