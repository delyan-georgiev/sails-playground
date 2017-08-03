exports.up = (pgm) => {
    pgm.createTable('References', {
        id: 'id',
        type:  'string',
        name: {
            type: 'string',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('References');
};
