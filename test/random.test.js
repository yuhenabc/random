var random = require('../dist/random');

describe('Random string generation tests', () => {
  it('should throw an error when \x1b[1mlength\x1b0m is not a string', done => {
    expect(() => random('string')).toThrow();
    done()
  });

  it('should return the default length of \x1b[1m12\x1b[0m characters when no length argument is provided', done => {
    expect(random()).toHaveLength(12);
    done();
  });

  it('should set type parameter to \x1b[1malphanumberic\x1b[0m when wrong type added', done => {
    expect(random(12, 'string')).toMatch(/[A-Za-z0-9]+/);
    done();
  });

  it('should return \x1b[1malphanumeric\x1b[0m characters when explicitly stated or no type is given', done => {
    expect(random(12, 'alphanumeric')).toMatch(/^[A-Za-z0-9]{12}$/);
    expect(random(12, '')).toMatch(/^[A-Za-z0-9]{12}$/);
    done();
  });

  it('should return \x1b[1mnumeric\x1b[0m characters', done => {
    expect(random(12, 'numeric')).toMatch(/^\d{12}$/);
    done()
  });

  it('should return \x1b[1mupper\x1b[0m case characters', done => {
    expect(random(12, 'upper')).toMatch(/^(?!.*\d)(?!.*[a-z])[A-Z]{12}$/);
    done()
  });

  it('should return \x1b[1mlower\x1b[0m case characters', done => {
    expect(random(12, 'lower')).toMatch(/^(?!.*\d)(?!.*[A-Z])[a-z]{12}$/);
    done()
  });

  it('should return \x1b[1mlower-numeric\x1b[0m characters', done => {
    expect(random(12, 'lowernumeric')).toMatch(/^(?!.*[A-Z])[a-z0-9]{12}$/);
    done()
  });

  it('should return \x1b[1mupper-numeric\x1b[0m characters', done => {
    expect(random(12, 'uppernumeric')).toMatch(/^(?!.*[a-z])[A-Z0-9]{12}$/);
    done()
  });

  it('should return \x1b[1mscoped\x1b[0m when scoped type is given', done => {
    expect(random(undefined, 'scoped:ABCDEF')).toMatch(/^(?!.*[G-Z0-9])[A-F]{12}/);
    done();
  });
});
