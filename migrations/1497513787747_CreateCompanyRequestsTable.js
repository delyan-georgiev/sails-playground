exports.up = (pgm) => {
    pgm.createTable('CompanyRequests', {
        status: {
            type: 'string',
            notNull: true,
        },
        name: 'string',
        countryOfReg: 'string',
        regNumber: 'string',
        bulstatNumber: 'string',
        vatNumber: 'string',
        regType: 'string',
        phoneNumber: 'string',
        faNumxber: 'string',
        email: 'string',
        responsiblePerson: {
            type: 'string',
            notNull: false
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CompanyRequests');
};
