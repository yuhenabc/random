const lower: string = 'abcdefghijklmnopqrstuvwxyz';
const upper: string = lower.toUpperCase();
const numeric: string = '0123456789';
const types: Record<string, string> = {
  lower,
  upper,
  numeric,
  lowernumeric: `${lower}${numeric}`,
  uppernumeric: `${upper}${numeric}`,
  alphanumeric: `${lower}${upper}${numeric}`
};
const typeKeys = Object.keys(types);

/**
 * Generate random string
 *
 * @param {number} length The length of the random string
 * @param {string} type The type of the random string
 * @returns {string}
*/
export default function (length?: number, type?: string): string {
  switch (arguments.length) {
    case 0:
      length = 12;
      type = 'alphanumeric';
      break;
    case 1:
      if (typeof arguments[0] === 'string') {
        length = 12;
        type = arguments[0];
      } else {
        type = 'alphanumeric';
      }
      break;
    case 2:
    default:
      break;
  }
  if (typeof length !== 'number')
    throw new Error(
      'length must be a number, but you give a ' + typeof length + '.'
    );
  if (typeof type !== 'string') {
    throw new Error(
      'type must be a string, but you give a ' + typeof type + '.'
    );
  } else if (!~typeKeys.indexOf(type) && !/^scoped:.+$/.test(type)) {
    throw new Error(
      'type must be one of ' + typeKeys.join(', ') + ', scoped:*, but you not.'
    );
  }

  const splitedTypes: string[] = type.split(':').map((v) => v.trim());
  let t: string = '';

  if (splitedTypes[0] !== 'scoped') {
    t = types[type];
  } else if (typeof splitedTypes[1] === 'string' && splitedTypes[1].length) {
    t = splitedTypes[1];
  }

  let str: string = '';
  let l: number = t.length;
  for (let i: number = 0; i < length; i++) {
    str += t.charAt(Math.floor(Math.random() * l));
  }
  return str;
}
