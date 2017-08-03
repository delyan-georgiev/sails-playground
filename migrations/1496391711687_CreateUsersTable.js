exports.up = (pgm) => {
  pgm.createTable('AuxUsers', {
    id: 'id',
    type: 'string',
    username: 'string',
    password: 'string',
    email: 'string',
    emailverified: 'boolean',
    verificationtoken: 'string',
    fullName: 'string',
    realm: 'string',
    skype: 'string',
    dateRegistered: 'date',
    directPhone: 'string',
    mobilePhone: 'string',
    pendingEmail: 'string',
    language: 'string',
    lastActive: 'date',
    created: 'date',
    modified: 'date',
      deleted: 'date'
  });
};

exports.down = (pgm) => {
  pgm.dropTable('AuxUsers');
};
