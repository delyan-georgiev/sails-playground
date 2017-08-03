exports.up = (pgm) => {
    pgm.createTable('GeneralNotifications', {
        id: 'id',
        title: {
            type: 'string',
            notNull: false
        },

        sendEmailNotifications: {
            type: 'boolean',
            default: true,
            notNull: false
        },

        categories: {
            type: 'integer[]'
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('GeneralNotifications');
};
