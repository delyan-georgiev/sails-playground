exports.up = (pgm) => {
    pgm.createTable('Comments', {
        id: 'id',
        type: 'string',
        entityId: 'integer',
        text: 'text',
        date: 'date',

        state: {
            type: 'string',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Comments');
};
