exports.up = (pgm) => {
    pgm.addColumns('Grants', {
        ReferenceId: 'integer',
        UserId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Grants', [
        'ReferenceId',
        'UserId',
    ]);
};
