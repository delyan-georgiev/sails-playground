exports.up = (pgm) => {
    pgm.createTable('AuxFiles', {
        id: 'id',
        name: 'string',
        mimeType: 'string',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuxFiles');
};
