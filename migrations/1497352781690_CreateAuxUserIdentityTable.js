exports.up = (pgm) => {
    pgm.createTable('AuxUserIdentities', {
        id: 'id',
        provider: 'string',
        authSheme: 'string',
        externalId: 'string',
        profile: 'json',
        credentials: 'json',
        created: 'date',
        modified: 'date',
        deleted: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuxUserIdentities');
};
