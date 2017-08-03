exports.up = (pgm) => {
    pgm.createTable('CompanyMembers', {
        level: {
            type: 'string',
            notNull: true,
        },
        hr: {
            type: 'boolean',
            notNull: true,
        },
        fin: {
            type: 'boolean',
            notNull: true,
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CompanyMembers');
};
