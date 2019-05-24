const lower: string = 'abcdefghijklmnopqrstuvwxyz'
  , upper: string = lower.toUpperCase()
  , numeric: string = '0123456789'
  , types: any = {
      lower,
      upper,
      numeric,
      lowernumeric: `${lower}${numeric}`,
      uppernumeric: `${upper}${numeric}`,
      alphanumeric: `${lower}${upper}${numeric}`
    }
  , tk: Array<string> = Object.keys(types);

export default function(length?: number, type?: string): string {
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
  if (typeof length !== 'number') throw new Error('length must be a number, but you give a ' + typeof length + '.');
  if (typeof type !== 'string') {
    throw new Error('type must be a string, but you give a ' + typeof type + '.');
  } else if (!~tk.indexOf(type) && !/^scoped:.+$/.test(type)) {
    throw new Error('type must be one of ' + tk.join(', ') + ', scoped:*, but you not.');
  }

  const splitType: Array<string> = type.split(':').map(v => v.trim());
  let t: string = '';

  if (splitType[0] !== 'scoped') {
    t = types[type];
  } else if (typeof splitType[1] === 'string' && splitType[1].length) {
    t = splitType[1];
  }

  let str: string = '';
  let l: number = t.length;
  for (let i: number = 0; i < length; i++) {
    str += t.charAt(Math.floor(Math.random() * l));
  }
  return str;
}
