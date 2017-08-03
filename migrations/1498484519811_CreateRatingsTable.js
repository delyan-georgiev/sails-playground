exports.up = (pgm) => {
    pgm.createTable('Ratings', {
        id: 'id',
        channel: {
            type: 'string',
            notNull: true
        },

        rate: {
            type: 'integer',
            notNull: true
        },

        note: {
            type: 'string',
            notNull: true
        },

        criteria: {
            type: 'string',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Ratings');
};
