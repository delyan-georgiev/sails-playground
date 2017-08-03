exports.up = (pgm) => {
    pgm.addColumns('CompanySubscriptionTransactions', {
        CompanySubscriptionId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('CompanySubscriptionTransactions', [
        'CompanySubscriptionId'
    ]);
};
