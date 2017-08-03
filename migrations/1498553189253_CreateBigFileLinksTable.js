exports.up = (pgm) => {
    pgm.createTable('BigFileLinks', {
        id: 'id',
        type: {
            type: 'string',
            notNull: true
        },
        referredBy: 'integer',
        note: 'text',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('BigFileLinks');
};
