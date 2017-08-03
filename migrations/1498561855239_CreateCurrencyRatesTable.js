exports.up = (pgm) => {
    pgm.createTable('CurrencyRates', {
        id: 'id',
        date: 'date',
        baseCurrency: {
            type: 'string',
            notNull: true
        },
        targetCurrency: {
            type: 'string',
            notNull: true
        },
        rate: {
            type: 'decimal(20, 10)',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CurrencyRates');
};
