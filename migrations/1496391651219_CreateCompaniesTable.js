exports.up = (pgm) => {
  pgm.createTable('Companies', {
    id: 'id',
    dateRegistered: 'date',
    name: {
      type: 'string',
      required: true
    },
    countryOfReg: 'string',
    regType: 'string',
    regNumber: 'string',
    email: 'string',
    phoneNumber: 'string',
    faxNumber: 'string',
    skype: 'string',
    description: 'string',
    bulstatNumber: 'string',
    vatNumber: 'string',
    url: 'string',
    canActivate: {
      type: 'boolean',
      default: true
    },
    marketMaker: {
      type: 'Boolean',
      default: false
    },
    type: 'string',
    personalOrBusiness: 'string',
    ownerId: 'integer',
    created: 'date',
    modified: 'date',
      deleted: 'date'
  });
};

exports.down = (pgm) => {
  pgm.dropTable('Companies');
};
