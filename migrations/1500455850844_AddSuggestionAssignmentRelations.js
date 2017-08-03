exports.up = (pgm) => {
    pgm.addColumns('SuggestionAssignments', {
        UserId: 'integer',
        AuctionId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('SuggestionAssignments', [
        'UserId',
        'AuctionId'
    ]);
};
