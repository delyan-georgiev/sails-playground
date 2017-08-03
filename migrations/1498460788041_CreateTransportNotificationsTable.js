exports.up = (pgm) => {
    pgm.createTable('TransportNotifications', {
        id: 'id',
        title: {
            type: 'string', // filter name
            notNull: false
        },

        sendEmailNotifications: {
            type: 'boolean',
            default: true,
            notNull: false,
        },

        countryCode: {
            type: 'text[]'
        },
        loadingType: 'integer[]',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('TransportNotifications');
};
