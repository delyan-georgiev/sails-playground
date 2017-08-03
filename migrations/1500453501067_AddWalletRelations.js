exports.up = (pgm) => {
    pgm.addColumns('Wallets', {
        BillingAddressId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Wallets', [
        'BillingAddressId'
    ]);
};
