exports.up = (pgm) => {
    pgm.addColumns('Orders', {
        AuctionId: 'integer',
        BidId: 'integer',
        SellerCompanyId: 'integer',
        BuyerCompanyId: 'integer',
        BuyerAddressId: 'integer',
        SellerAddressId: 'integer',
        CreatedBy: 'integer',
        OrderId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Orders', [
        'AuctionId',
        'BidId',
        'SellerCompanyId',
        'BuyerCompanyId',
        'BuyerAddressId',
        'SellerAddressId',
        'CreatedBy',
        'OrderId',
    ]);
};
