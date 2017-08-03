exports.up = (pgm) => {
    pgm.createTable('Addresses', {
        id: 'id',
        line1: 'string',
        line2: 'string',
        city: 'string',
        state: 'string',
        postalCode: 'string',
        country: 'string',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Addresses');
};
