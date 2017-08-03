exports.up = (pgm) => {
    pgm.addColumns('AuctionStats', {
        AuctionId: "integer"
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('AuctionStats', ['AuctionId']);
};
