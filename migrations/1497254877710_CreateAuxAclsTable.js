exports.up = (pgm) => {
    pgm.createTable('AuxAcls', {
        id: 'id',
        model: {
            type: 'string',
            description: 'The name of the model'
        },
        property: {
            type: 'string',
            description: 'The name of the property, method, scope, or relation'
        },
        accessType: 'string',
        permission: 'string',
        principalType: 'string',
        principalId: 'string',
        created: 'date',
        modified: 'date',
        deleted: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuxAcls');
};
