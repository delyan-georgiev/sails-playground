exports.up = (pgm) => {
    pgm.createTable('AuctionReferences', {
        ReferenceId: {
            type: 'serial',
            primaryKey: true
        },
        state: {
            type: 'string',
            notNull: false
        },
        countActiveBids: {
            type: 'integer',
            defaultValue: 0,
            notNull: true
        },
        inviteToken: {
            type: 'string',
            notNull: false
        },
        isWinner: {
            type: 'boolean',
            defaultValue: false,
            notNull: true
        },
        sap_data: 'json',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuctionReferences');
};
