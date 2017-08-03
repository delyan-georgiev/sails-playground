exports.up = (pgm) => {
    pgm.addColumns('TransportNotifications', {
        UserId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('TransportNotifications', [
        'UserId'
    ]);
};
