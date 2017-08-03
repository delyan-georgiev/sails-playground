exports.up = (pgm) => {
    pgm.addColumns('NotificationSubscriptions', {
        UserId: 'integer',
        ReferenceId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('NotificationSubscriptions', [
        'UserId',
        'ReferenceId'
    ]);
};
