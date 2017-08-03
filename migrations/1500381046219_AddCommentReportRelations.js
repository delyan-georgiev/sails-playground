exports.up = (pgm) => {
    pgm.addColumns('CommentReports', {
        UserId: {
            type: 'integer',
            notNull: true
        },
        CommentId: {
            type: 'integer',
            notNull: true
        }
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('CommentReports', [
        'UserId',
        'CommentId'
    ]);
};
