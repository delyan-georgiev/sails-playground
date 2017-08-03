exports.up = (pgm) => {
    pgm.createTable('CompanyLocations', {
        id: 'id',
        name: 'string',
        type: 'string',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CompanyLocations');
};
