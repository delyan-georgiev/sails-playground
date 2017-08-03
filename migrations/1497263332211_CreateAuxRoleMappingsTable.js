exports.up = (pgm) => {
    pgm.createTable('AuxRoleMappings', {
        id: 'id',
        principalType: {
            type: 'string',
            description: 'The principal type, such as USER, APPLICATION, ROLE, or user model name in case of multiple user models'
        },
        principalId: 'string',
        roleId: 'string',
        created: 'date',
        modified: 'date',
        deleted: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuxRoleMappings');
};
