exports.up = (pgm) => {
    pgm.addColumns('Notes', {
        UserId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Notes', [
        'UserId'
    ]);
};
