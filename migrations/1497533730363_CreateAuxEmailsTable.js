exports.up = (pgm) => {
    pgm.createTable('AuxEmails', {
        type: {
            type: 'string',
            allowNull: false,
        },

        relatedTo: {
            type: 'string',
        },

        relatedToId: {
            type: 'integer',
        },

        date: {
            type: 'date',
            allowNull: false,
        },

        status: {
            type: 'string',
            allowNull: false,
        },

        reason: {
            type: 'json',
            default: null,
            allowNull: true
        },

        from: {
            type: 'string'
        },

        to: {
            type: 'text'
        },

        subject: {
            type: 'text',
        },

        text: {
            type: 'text',
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('AuxEmails');
};
