exports.up = (pgm) => {
    pgm.addColumns('Assignments', {
       SellerReferenceId : 'integer',
       BuyerReferenceId : 'integer',
       AuctionId : 'integer',
       BuyerAddressId : 'integer',
       SellerAddressId : 'integer',
       BidId : 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Assignments', [
        'SellerReferenceId',
        'BuyerReferenceId',
        'AuctionId',
        'BuyerAddressId',
        'SellerAddressId',
        'BidId'
    ]);
};
