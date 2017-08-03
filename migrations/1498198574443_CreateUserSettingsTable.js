exports.up = (pgm) => {
    pgm.createTable('UserSettings', {
        id: 'id',
        type: {
            type: 'string',
            notNull: true,
            default: 0,
        },
        data: {
            type: 'json',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('UserSettings');
};
