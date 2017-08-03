exports.up = (pgm) => {
    pgm.createTable('Contacts', {
        id: 'id',
        companyName: {
            type: 'string',
            notNull: true,
        },
        userFullName: {
            type: 'string',
            notNull: true,
        },
        userEmail: {
            type: 'string',
            notNull: false,
        },
        userPhone: {
            type: 'string',
            notNull: false,
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Contacts');
};
