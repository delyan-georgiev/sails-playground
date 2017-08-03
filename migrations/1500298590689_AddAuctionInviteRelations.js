exports.up = (pgm) => {
    pgm.addColumns('AuctionInvites', {
        AuctionId: 'integer',
        CompanyId: 'integer',
        AuctionReferenceId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('AuctionInvites', [
        'AuctionId',
        'CompanyId',
        'AuctionReferenceId'
    ]);
};
