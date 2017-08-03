exports.up = (pgm) => {
    pgm.addColumns('NotificationMatches', {
        UserId: 'integer',
        AuctionId: 'integer',
        CompanyId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('NotificationMatches', [
        'UserId',
        'AuctionId',
        'CompanyId'
    ]);
};
