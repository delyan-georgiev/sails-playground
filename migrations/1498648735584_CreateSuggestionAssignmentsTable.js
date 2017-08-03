exports.up = (pgm) => {
    pgm.createTable('SuggestionAssignments', {
        id: 'id',
        status: {
            type: 'string',
            notNull: true
        },
        note: 'string',
        data: 'jsonb',
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('SuggestionAssignments');
};
