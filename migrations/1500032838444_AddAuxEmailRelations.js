exports.up = (pgm) => {
    pgm.addColumns('AuxEmails', {
        UserId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('auxEmails', [
        'UserId'
    ]);
};
