declare module 'random-string-generator' {
  /**
   * Generate random string
   *
   * @param {number} [length] The length of the random string, default is 12
   * @param {string} [type] The type of the random string, default is 'alphanumeric'
   * @returns {string} The random string
   */
  function random(length?: number, type?: string): string
  export default random
}
