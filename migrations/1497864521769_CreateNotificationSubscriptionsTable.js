exports.up = (pgm) => {
    pgm.createTable('NotificationSubscriptions', {
        id: 'id',
        event: {
            type: 'string',
            notNull: true
        },
        params: {
            type: 'json'
        },
        channels: {
            type: 'text[]',
            notNull: true,
            default: ['']
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('NotificationSubscriptions');
};
