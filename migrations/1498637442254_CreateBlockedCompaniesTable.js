exports.up = (pgm) => {
    pgm.createTable('BlockedCompanies', {
        reason: {
            type: 'string',
            notNull: false
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('BlockedCompanies');
};
