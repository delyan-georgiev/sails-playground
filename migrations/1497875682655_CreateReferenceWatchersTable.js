exports.up = (pgm) => {
    pgm.createTable('ReferenceWatchers', {
        id: 'id',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('ReferenceWatchers');
};
