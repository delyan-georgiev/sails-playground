/**
 * Test.ts
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
// import Model = require('./Model');
const attributes = {
  createdAt: false,
  updatedAt: false
};
class Test {
  attributes: Object;

  constructor(attributes: Object) {
    this.attributes = attributes;
  }

  static getSome() {
    return 'test';
  }
}

export = new Test(attributes);

