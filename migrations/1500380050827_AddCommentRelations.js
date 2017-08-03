exports.up = (pgm) => {
    pgm.addColumns('Comments', {
        UserId: {
            type: 'integer',
            notNull: true
        },
        AuthorReferenceId: 'integer',
        ReferenceId: 'integer'
    });
};

exports.down = (pgm) => {
    pgm.dropColumns('Comments', [
        'UserId',
        'AuthorReferenceId',
        'ReferenceId'
    ]);
};
