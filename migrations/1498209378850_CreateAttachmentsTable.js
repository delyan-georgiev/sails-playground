exports.up = (pgm) => {
    pgm.createTable('Attachments', {
        id: 'id',
        title: 'string',
        description: 'string',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Attachments');
};
