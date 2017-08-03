exports.up = (pgm) => {
    pgm.addColumns('ReferenceWatchers', {
        ReferenceId: 'integer',
        UserId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('ReferenceWatchers', [
        'ReferenceId',
        'UserId'
    ]);
};
