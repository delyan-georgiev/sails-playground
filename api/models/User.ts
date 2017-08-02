/**
 * User.ts
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
// import Model = require('./Model');
const attributes = {
  first_name: {
    type: 'string'
  },
  last_name: 'string',
  test: {
    model: 'test',
    defaultsTo: 1
  },
  company: {
    collection: 'company',
    via: 'owner'
  },
  state: {
    type: 'string',
    enum: ['pending', 'approved', 'denied']
  },
  isapproved: false,
  fullName: function() {
    return this.first_name + ' ' + this.last_name
  }
  /*test: {
    model: 'client',
  }*/
};
class User {
  attributes: Object;
  tableName: string;
  constructor(attributes: Object) {
    this.tableName = 'User';
    this.attributes = attributes;
  }

  static getSome() {
    return 'test';
  }
}

export = new User(attributes);

