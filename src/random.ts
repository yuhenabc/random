const lower: string = 'abcdefghijklmnopqrstuvwxyz'
  , upper: string = lower.toUpperCase()
  , numeric: string = '0123456789'
  , types: any = { lower, upper, numeric, alphanumeric: `${lower}${upper}${numeric}` };

export default (length: number = 12, scope: string = "", type: string = 'alphanumeric'): string => {
  if (typeof length !== 'number') throw new Error('length must be a number');
  if (typeof scope !== 'string') throw new Error('scope must be a string');
  
  const tk: Array<string> = Object.keys(types);
  const t: string = typeof type === 'string' && ~tk.indexOf(type) ? types[type] : types['alphanumeric'];

  let str: string = '';
  let l: number = t.length;
  for (let i: number = 0; i < length; i++) {
    str += t.charAt(Math.floor(Math.random() * l));
  }
  return str;
}
