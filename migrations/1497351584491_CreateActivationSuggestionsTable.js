exports.up = (pgm) => {
    pgm.createTable('ActivationSuggestions', {
        id: 'id',
        note: {
            type: 'string'
        },
        status: {
            type: 'string',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('ActivationSuggestions');
};
