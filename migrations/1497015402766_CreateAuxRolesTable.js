exports.up = (pgm) => {
    pgm.createTable('AuxRoles', {
        id: 'id',
        name: {
            type: 'string',
            required: true
        },
        description: 'string',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuxRoles');
};
