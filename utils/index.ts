export function generateID() {
  return (
    new Date().getTime().toString() +
    '-' +
    Math.floor(Math.random() * 99999999).toString()
  );
}
