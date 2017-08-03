exports.up = (pgm) => {
    pgm.addColumns('ActivationSuggestions', {
        UserId: 'integer',
        AuctionId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('ActivationSuggestions', ['UserId', 'AuctionId']);
};
