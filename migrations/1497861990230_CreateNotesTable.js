exports.up = (pgm) => {
    pgm.createTable('Notes', {
        id: 'id',
        type: 'string',
        entityId: 'integer',
        text: 'string',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Notes');
};
