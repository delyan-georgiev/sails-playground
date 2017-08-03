exports.up = (pgm) => {
    pgm.createTable('Transactions', {
        id: 'id',
        date: {
            type: 'date',
            notNull: true
        },
        type: {
            type: 'string',
            notNull: true
        },
        side: {
            type: 'string',
            notNull: true
        },
        amount: {
            type: 'double',
            notNull: true
        },
        reference: {
            type: 'string',
            notNull: true,
            default: 'N/A'
        },
        details: {
            type: 'string',
            notNull: true
        },
        linkType: {
            type: 'string'
        },
        linkId: {
            type: 'integer'
        },
        cancelReason: {
            type: 'string'
        },
        context: {
            type: 'jsonb',
            notNull: false
        },
        isCanceled: {
            type: 'boolean',
            default: false
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Transactions');
};
