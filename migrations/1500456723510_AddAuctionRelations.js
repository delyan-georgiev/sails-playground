exports.up = (pgm) => {
    pgm.addColumns('Auctions', {
        OwnedBy: 'integer',
        RejectedBy: 'integer',
        ContractId: 'integer',
        CreatorId: 'integer',
        CompanyId: 'integer',
        PriceListId: 'integer',
        AwarderId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Auctions', [
        'OwnedBy',
        'RejectedBy',
        'ContractId',
        'CreatorId',
        'CompanyId',
        'PriceListId',
        'AwarderId'
    ]);
};
