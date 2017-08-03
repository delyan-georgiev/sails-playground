exports.up = (pgm) => {
    pgm.addColumns('AuctionReferences', {
        AuctionId: 'integer',
        AuctionInviteId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('AuctionReferences', ['AuctionId', 'AuctionInviteId']);
};
