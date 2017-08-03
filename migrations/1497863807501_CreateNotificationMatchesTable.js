exports.up = (pgm) => {
    pgm.createTable('NotificationMatches', {
        id: 'id',
        email: {
            type: 'string',
            notNull: true
        }
    });
};

exports.down = (pgm) => {
    pgm.dropTable('NotificationMatches');
};
