exports.up = (pgm) => {
    pgm.createTable('AuctionInvites', {
        id: 'id',
        consumed: {
            type: 'boolean',
            notNull: true,
            default: false,
        },
        invalid: {
            type: 'boolean',
            notNull: true,
            default: false,
        },
        timesSent: {
            type: 'integer',
            notNull: true,
            default: 0
        },
        email: {
            type: 'string',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuctionInvites');
};
