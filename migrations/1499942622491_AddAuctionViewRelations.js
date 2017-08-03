exports.up = (pgm) => {
    pgm.addColumns('AuctionViews', {
       UserId : 'integer',
       AuctionId : 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('AuctionViews', [
        'UserId',
        'AuctionId'
    ]);
};
