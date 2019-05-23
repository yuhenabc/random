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
    };

export default (length: number = 12, type: string = 'alphanumeric'): string => {
  if (typeof length !== 'number') throw new Error('length must be a number');
  if (typeof type !== 'string') throw new Error('type must be a string');

  const splitType: Array<string> = type.split(':').map(v => v.trim());
  let t: string = '';
  const tk: Array<string> = Object.keys(types);

  if (splitType[0] !== 'scoped') {
    t = typeof type === 'string' && ~tk.indexOf(type) ? types[type] : types['alphanumeric'];
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
