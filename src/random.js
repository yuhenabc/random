export default function (length = 12, scope = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
  if (typeof length !== 'number') throw new Error('length must be a number');
  if (typeof scope !== 'string') throw new Error('scope must be a string');
  let str = '';
  let l = scope.length;
  for (let i = 0; i < length; i++) {
    str += scope.charAt(Math.floor(Math.random() * l));
  }
  return str;
}
