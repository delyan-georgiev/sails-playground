exports.up = (pgm) => {
    pgm.createTable('AuctionViews', {
        id: 'id',
        date: 'date',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuctionViews');
};
