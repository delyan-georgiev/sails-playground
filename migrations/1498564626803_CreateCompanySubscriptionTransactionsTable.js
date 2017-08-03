exports.up = (pgm) => {
    pgm.createTable('CompanySubscriptionTransactions', {
        id: 'id',
        amount: {
            type: 'double',
            notNull: true
        },
        description: {
            type: 'string',
            notNull: true
        },
        privateDescription: 'string',
        date: {
            type: 'date',
            notNull: true
        },
        hidden: {
            type: 'boolean',
            default: true,
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CompanySubscriptionTransactions');
};
