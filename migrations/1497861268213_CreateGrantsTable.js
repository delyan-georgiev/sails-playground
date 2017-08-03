exports.up = (pgm) => {
    pgm.createTable('Grants', {
        id: 'id',
        role: 'string',
        inheritedCount: 'integer',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Grants');
};
