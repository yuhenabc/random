const random = require('../index');

describe('Random string generation tests', () => {
  it('should throw an error when length is not a string', done => {
    expect(() => random({}, 'alphanumeric')).toThrow();
    done()
  });

  it('should return the default length of 12 characters when no length argument is provided', done => {
    expect(random()).toHaveLength(12);
    done();
  });

  it('should return the exact length when length argument is provided', done => {
    expect(random(20)).toHaveLength(20);
    done();
  });

  it('should throw an error when type is not a string', done => {
    expect(() => random(12, {})).toThrow();
    done()
  });

  it('should throw an error when type is not in given strings', done => {
    expect(() => random('string')).toThrow();
    done()
  });

  it('should return alphanumeric characters when explicitly stated or no type is given', done => {
    expect(random('alphanumeric')).toMatch(/^[A-Za-z0-9]{12}$/);
    done();
  });

  it('should return numeric characters', done => {
    expect(random('numeric')).toMatch(/^\d{12}$/);
    done()
  });

  it('should return upper case characters', done => {
    expect(random('upper')).toMatch(/^(?!.*\d)(?!.*[a-z])[A-Z]{12}$/);
    done()
  });

  it('should return lower case characters', done => {
    expect(random('lower')).toMatch(/^(?!.*\d)(?!.*[A-Z])[a-z]{12}$/);
    done()
  });

  it('should return lower-numeric characters', done => {
    expect(random('lowernumeric')).toMatch(/^(?!.*[A-Z])[a-z0-9]{12}$/);
    done()
  });

  it('should return upper-numeric characters', done => {
    expect(random('uppernumeric')).toMatch(/^(?!.*[a-z])[A-Z0-9]{12}$/);
    done()
  });

  it('should return scoped when scoped type is given', done => {
    expect(random('scoped:ABCDEF')).toMatch(/^(?!.*[G-Z0-9])[A-F]{12}/);
    done();
  });
});
