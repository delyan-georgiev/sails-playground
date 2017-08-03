exports.up = (pgm) => {
    pgm.addColumns('GeneralNotifications', {
        UserId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('GeneralNotifications', [
        'UserId'
    ]);
};
