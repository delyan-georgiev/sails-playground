exports.up = (pgm) => {
    pgm.createTable('CompanySubscriptions', {
        id: 'id',
        status: {
            type: 'string',
            notNull: true
        },
        typeName: {
            type: 'string',
            notNull: false
        },
        optionName: {
            type: 'string',
            notNull: true
        },
        typeIdent: {
            type: 'string',
            notNull: true
        },
        optionIdent: {
            type: 'string',
            notNull: true
        },
        remaining: {
            type: 'double'
        },
        expiration: {
            type: 'date',
            notNull: true
        },
        remainingAtExpiration: {
            type: 'double'
        },
        autorenew: {
            type: 'boolean',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CompanySubscriptions');
};
