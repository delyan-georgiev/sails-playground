exports.up = (pgm) => {
    pgm.createTable('CommentReports', {
        id: 'id',
        note: 'string',
        state: {
            type: 'string',
            notNull: true
        },
        created: 'date',
        modified: 'date'
    });
};

exports.down = (pgm) => {
    pgm.dropTable('CommentReports');
};
