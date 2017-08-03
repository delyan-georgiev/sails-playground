exports.up = (pgm) => {
    pgm.addColumns('CommentsSummaries', {
        CommentId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('CommentsSummaries', [
        'CommentId'
    ]);
};
