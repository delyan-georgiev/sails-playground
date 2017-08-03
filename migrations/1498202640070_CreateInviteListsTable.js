exports.up = (pgm) => {
    pgm.createTable('InviteLists', {
        id: 'id',
        name: {
            type: 'string',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('InviteLists');
};
