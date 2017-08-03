exports.up = (pgm) => {
    pgm.addColumns('Companies', {
        OwnerId: 'integer',
        BusinessAddressId: 'integer',
        RootRefId: 'integer',
        WalletId: 'integer',
        LogoId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Companies', [
        'OwnerId',
        'BusinessAddressId',
        'RootRefId',
        'WalletId',
        'LogoId'
    ]);
};
