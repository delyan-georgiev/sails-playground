exports.up = (pgm) => {
    pgm.createTable('InviteListItems', {
        id: 'id',
        email: {
            type: 'string',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('InviteListItems');
};
