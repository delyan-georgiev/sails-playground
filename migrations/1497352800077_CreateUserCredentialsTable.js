exports.up = (pgm) => {
    pgm.createTable('UserCredentials', {
        id: 'id',
        provider: 'string',
        authScheme: 'string',
        externalId: 'string',
        profile: 'json',
        credentials: 'json',
        created: 'date',
        modified: 'date',
        deleted: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('UserCredentials');
};
