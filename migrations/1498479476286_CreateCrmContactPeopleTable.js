exports.up = (pgm) => {
    pgm.createTable('CrmContactPeople', {
        id: 'id',
        name: 'string',
        position: 'string',
        isDecisionMaker: {
            type: 'boolean',
            notNull: true,
            default: false
        },
        isContactPerson: {
            type: 'boolean',
            notNull: true,
            default: false
        },
        email: 'string',
        phone: 'string',
        created: 'date',
        modified: 'date',
        deleted: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CrmContactPeople');
};
