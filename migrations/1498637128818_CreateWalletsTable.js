exports.up = (pgm) => {
    pgm.createTable('Wallets', {
        id: 'id',
        balance: {
            type: 'double',
            default: 0
        },
        responsiblePerson: {
            type: 'string'
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('Wallets');
};
