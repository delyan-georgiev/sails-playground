exports.up = (pgm) => {
    pgm.createTable('AuxAccessTokens', {
        id: 'id',
        ttl: {
            type: 'integer',
            ttl: true,
            default: 1209600,
            description: 'time to live in seconds (2 weeks by default)'
        },
        scopes: {
            type: 'string',
            description: 'Array of scopes granted to this access token.'
        },
        created: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuxAccessTokens');
};
